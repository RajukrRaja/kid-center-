import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaUser,
  FaSignInAlt,
  FaSearch,
} from 'react-icons/fa';
import Sidebar from '../sidebar/sidebar'; // Ensure correct path
import './Navbar.css';
import Home from '../Home/Home';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation(); // Get the current location

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleResize = useCallback(() => {
    const mobile = window.innerWidth < 1024;
    setIsMobile(mobile);
    if (!mobile) {
      closeSidebar();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top on route change
  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <div className="navbar-root">
      <header className={`navbar-header ${isSidebarOpen ? 'navbar-header-shift' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-brand" aria-label="Home">
            PrepMint
          </Link>

          {/* Hide the navbar links when sidebar is open on mobile */}
          {!isSidebarOpen && (
            <nav className={`navbar-nav ${isMobile ? 'hidden' : ''}`}>
              <ul className="navbar-list">
                <li className="navbar-item">
                  <Link to="/" className="navbar-link" aria-label="Go to Home" onClick={scrollToTop}>
                    <FaHome className="navbar-icon" /> Home
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/about" className="navbar-link" aria-label="Learn more about us" onClick={scrollToTop}>
                    <FaInfoCircle className="navbar-icon" /> About
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contact" className="navbar-link" aria-label="Contact us" onClick={scrollToTop}>
                    <FaEnvelope className="navbar-icon" /> Contact
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/profile" className="navbar-link" aria-label="View your profile" onClick={scrollToTop}>
                    <FaUser className="navbar-icon" /> Profile
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/login" className="navbar-link" aria-label="Login to your account" onClick={scrollToTop}>
                    <FaSignInAlt className="navbar-icon" /> Login
                  </Link>
                </li>
              </ul>
            </nav>
          )}

          <form className="navbar-search" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="navbar-search-input-main"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              aria-label="Search"
            />
            <button type="submit" className="navbar-search-button" aria-label="Search">
              <FaSearch />
            </button>
          </form>

          {isMobile && (
            <button
              className="navbar-menu-toggle"
              onClick={toggleSidebar}
              aria-expanded={isSidebarOpen}
              aria-label={isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
            >
              {isSidebarOpen ? '✕' : '☰'}
            </button>
          )}
        </div>
      </header>

      {/* Sidebar for mobile view */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
};

export default Navbar;
