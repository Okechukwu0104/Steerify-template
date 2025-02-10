import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Steerify</div>
      <ul className="nav-links">
        <li>Business</li>
        <li>Investors</li>
        <li>Customers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="sign-in">Sign In</button>
    </nav>
  );
};

export default Navbar;
