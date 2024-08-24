import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Stock Market App</h1>
      <div className="links">
        <Link to="/">Trade Stocks</Link>
        <Link to="/dashboard">View Holdings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
