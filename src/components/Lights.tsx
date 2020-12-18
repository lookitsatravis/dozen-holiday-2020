import React from 'react';
import '../styles/lights.sass';

interface LightsProps {
  count?: number;
}

export default function Lights({ count = 50 }: LightsProps) {
  const lights = new Array(count).fill(0);

  return (
    <ul className="lightrope">
      {lights.map((_, i) => (
        <li key={i}></li>
      ))}
    </ul>
  );
}
