// C:\Users\hussa\greeky-foodtruck\src\App.jsx

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.css"; // Updated CSS

import Home from "./screens/Home";
import Menu from "./screens/Menu";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Order from "./screens/Order";
import Catering from "./screens/Catering";
import Gallery from "./screens/Gallery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Social icons (optional) from react-icons
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function App() {
  // State for hamburger menu toggle
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Toggle function for hamburger
  const handleHamburgerClick = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  // Close mobile nav on link click
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div className="app-container">
      <Router>
        {/* NAVBAR */}
        <nav className="navbar">
          {/* Brand or Logo */}
          <Link to="/" className="navbar-brand">
            GreekyFoodTruck
          </Link>

          {/* Standard desktop nav links */}
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/menu" className="nav-link">
              Menu
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/catering" className="nav-link">
              Catering
            </Link>
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/order" className="nav-link">
              Order Now
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className={`hamburger ${isMobileNavOpen ? "active" : ""}`}
            onClick={handleHamburgerClick}
            aria-label="Toggle navigation"
          >
            <div className="line line1" />
            <div className="line line2" />
            <div className="line line3" />
          </button>

          {/* Mobile nav menu */}
          <div className={`mobile-nav ${isMobileNavOpen ? "open" : ""}`}>
            <Link to="/" className="nav-link" onClick={closeMobileNav}>
              Home
            </Link>
            <Link to="/menu" className="nav-link" onClick={closeMobileNav}>
              Menu
            </Link>
            <Link to="/about" className="nav-link" onClick={closeMobileNav}>
              About
            </Link>
            <Link to="/catering" className="nav-link" onClick={closeMobileNav}>
              Catering
            </Link>
            <Link to="/gallery" className="nav-link" onClick={closeMobileNav}>
              Gallery
            </Link>
            <Link to="/contact" className="nav-link" onClick={closeMobileNav}>
              Contact
            </Link>
            <Link to="/order" className="nav-link" onClick={closeMobileNav}>
              Order Now
            </Link>
          </div>
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-content">
            {/* Social Icons */}
            <div className="footer-links">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <FaTwitter />
              </a>
            </div>

            {/* Newsletter (optional) */}
            {/*
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </form>
            */}

            <div style={{ marginTop: "0.5rem" }}>
              <p style={{ marginBottom: "0.3rem" }}>
                <strong>Address:</strong> 123 Food Truck Lane, Flavor Town
              </p>
              <p style={{ marginBottom: "0.3rem" }}>
                <strong>Phone:</strong> +1 (234) 567-8901
              </p>
              <p style={{ marginBottom: "0.3rem" }}>
                <strong>Email:</strong> info@greekyfoodtruck.com
              </p>
            </div>

            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} Greeky Food Truck
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
