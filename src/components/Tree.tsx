import React from 'react';
import '../styles/tree.css';

// Original source/idea: https://codemyui.com/christmas-tree-animation/
export default function Tree() {
  return (
    <div className="container">
      <div className="star-glow"></div>
      <div className="star star-light"></div>
      <div className="pressie">
        <div className="cover"></div>
        <div className="wrap"></div>
        <div className="ribbon"></div>
      </div>
      <div className="tree">
        <div className="base"></div>
        <div className="layer">
          <div className="line"></div>
          <div className="bauble one light"></div>
        </div>

        <div className="layer two">
          <div className="line two"></div>
          <div className="bauble two light"></div>
          <div className="socks">
            <div className="top"></div>
            <div className="foot"></div>
          </div>
        </div>

        <div className="layer three">
          <div className="line three"></div>
          <div className="bauble three light"></div>
          <div className="socks two">
            <div className="top"></div>
            <div className="foot two"></div>
          </div>
        </div>
      </div>

      <div className="layer four">
        <div className="bauble four light"></div>
        <div className="star two star-light"></div>
        <div className="line four"></div>
      </div>
    </div>
  );
}
