import React, { useEffect, useState, useRef } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import '../styles/snow.scss';

const rand = (min: number, max: number) => min + Math.random() * (max - min);

const normalize = (val: number, max: number, min: number, floor: number) =>
  Math.max(floor, Math.min(1, (val - min) / (max - min)));

class Snowflake {
  _elapsed: number = 0;
  _maxVel: number = 0.008;
  x: number = 0;
  y: number = 0;
  xVel: number = 0;
  yVel: number = 0;
  angle: number = 0;
  angleVel: number = 0;
  size: number = 0;

  constructor(public width: number, public height: number, public ctx: CanvasRenderingContext2D, public id: number) {
    this.spawn();
  }

  spawn(anyY = false) {
    this._elapsed = performance.now();
    this.x = rand(0, this.width);
    this.y = anyY === true ? rand(-50, this.height + 50) : rand(-50, -10);
    this.xVel = rand(-0.05, 0.05);
    this.yVel = rand(0.02, 0.1);
    this.angle = rand(0, Math.PI * 1.5);
    this.angleVel = rand(-0.001, 0.001);
    this.size = rand(5, 22);
  }

  update(now: number) {
    const xForce = rand(-0.001, 0.001);
    const delta = Math.min((now - this._elapsed) / 60, 60);

    if (Math.abs(this.xVel + xForce) < 0.075) {
      this.xVel += xForce;
    }

    if (this.xVel > this._maxVel) {
      this.xVel = this._maxVel;
    }

    this.x += this.xVel * delta;
    this.y += this.yVel * delta;
    this.angle += this.xVel * 0.05 * delta;

    if (this.y - this.size > this.height || this.x + this.size < 0 || this.x - this.size > this.width) {
      this.spawn();
    }

    this.render();
  }

  render() {
    this.ctx.save();
    const { x, y, angle, size } = this;
    this.ctx.beginPath();
    this.ctx.arc(x, y, size * 0.2, 0, Math.PI * 2, false);
    this.ctx.fillStyle = `rgba(255, 255, 255, ${normalize(size, 5, 22, 0.75)})`;
    this.ctx.fill();
    this.ctx.restore();
  }
}

export default function Snow() {
  const windowSize = useWindowSize();
  const [width, setWidth] = useState(windowSize.width);
  const [height, setHeight] = useState(windowSize.height);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snowFlakes, setSnowFlakes] = useState<Snowflake[]>([]);
  const [running, setRunning] = useState(false);
  const maxSnowflakes = 100;

  useEffect(() => {
    if (!ctx && canvasRef.current) {
      const newCtx = canvasRef.current.getContext('2d');
      if (newCtx) {
        setCtx(newCtx);
      }
    }
  }, [ctx, canvasRef]);

  useEffect(() => {
    setWidth(windowSize.width);
    setHeight(windowSize.height);
  }, [windowSize]);

  useEffect(() => {
    if (running) {
      return;
    }

    if (!ctx || width === 0 || height === 0) {
      return;
    }

    let animationFrame: number;

    function render(now: number) {
      animationFrame = requestAnimationFrame(render);

      if (ctx) {
        ctx.clearRect(0, 0, width, height);
        if (snowFlakes.length < maxSnowflakes) {
          snowFlakes.push(new Snowflake(width, height, ctx, snowFlakes.length + 1));
        }

        snowFlakes.forEach((snowflake) => snowflake.update(now));
      }
    }

    setRunning(true);
    render(performance.now());

    () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [ctx, width, height, running]);

  return (
    <div className="snow">
      <canvas ref={canvasRef} width={width} height={height}></canvas>
    </div>
  );
}
