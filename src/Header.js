import React from 'react';
import logoImage from './logo.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
      <div className="logo">
          <img className="logoimage" src={logoImage} alt="Dolfin Logo" /> Dolfin
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/categories">Recent Phishing Activity</a></li>
          <li><a href="/about">FAQ</a></li>
          <li><a href="/about">Games</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
