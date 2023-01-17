import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <ul className="nav-lists">
      <li className="nav-list">
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-list">
        <Link className="link" to="/calculator">
          Calculator
        </Link>
      </li>
      <li className="nav-list">
        <Link className="link" to="/quote">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
