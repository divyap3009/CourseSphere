import React, { useState } from 'react';
import '../assets/styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Closes the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <h1>Greamio Technologies</h1>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/course" onClick={closeMenu}>Course</Link></li>
        {user ? (
          <li>
            <Link onClick={() => { closeMenu(); logOut(); }}>Logout</Link>
          </li>
        ) : (
          <li>
            <Link to="/login" onClick={closeMenu}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
