import React from 'react';
import '../styles/header.css';

export default function Header() {
  const title = 'Dozen Elefante Blanco';

  return (
    <div className="header-container">
      <h1 className="header header-back">{title}</h1>
      <h1 className="header">{title}</h1>
      <img src="/2020.png" className="header-img" alt="2020 Sucks" />
    </div>
  );
}
