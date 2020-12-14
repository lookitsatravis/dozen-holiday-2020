import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import './ground.css';

export default function Ground() {
  const windowSize = useWindowSize();

  return (
    <div className="ground">
      <svg viewBox="0 0 800 600" preserveAspectRatio="none">
        <g>
          <path
            id="svg_1"
            d="m0.5,442.5c180,-66 85,-12 326,14c241,26 193,-19 282,-3c89,16 119,42 176,28c57,-14 64,-32 63.5,-32.5c0.5,0.5 -14.5,209.5 -15,209c0.5,0.5 -858.5,18.5 -858,18c-0.5,0.5 -6.5,-225.5 -6,-226c-0.5,0.5 -148.5,58.5 31.5,-7.5z"
            strokeWidth="1.5"
            stroke="#fff"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
}
