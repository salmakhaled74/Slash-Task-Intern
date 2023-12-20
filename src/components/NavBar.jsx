import React, { useState } from "react";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// NavBar component for navigation
export default function NavBar() {
  // State to control the visibility of the navigation menu
  const [showNav, setShowNav] = useState(false);

  // Toggle function to show/hide the navigation menu
  const handleShowNavbar = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo with a link to the home page */}
        <NavLink to="/">
          <div className="logo">
            <img src="/slash_creators_logo.jpeg" alt="Slash Creators Logo" />
          </div>
        </NavLink>
        
        {/* Menu icon for mobile navigation */}
        <div onClick={handleShowNavbar} className="menu-icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
        
        {/* Navigation elements */}
        <div className={`nav-elements ${showNav && "active"}`}>
          <ul>
            {/* Navigation links */}
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
            <NavLink to="/" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/" className="nav-link">
              About
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
