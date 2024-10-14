// src/Components/sidebar/sidebar.jsx

import React, { useState } from 'react';
import './sidebar.css';
import {
  HomeIcon,
  InformationCircleIcon,
  EnvelopeIcon,
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { Avatar } from '@mui/material';

const Sidebar = ({ isOpen, onClose, userName }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const handleSubmenuToggle = () => setSubmenuOpen((prev) => !prev);

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} aria-label="Close Sidebar Overlay"></div>}

      {/* Sidebar Content */}
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`} aria-hidden={!isOpen}>
        {/* Close button */}
        <button onClick={onClose} className="sidebar-close-btn" aria-label="Close Sidebar">
          <span aria-hidden="true">&times;</span>
        </button>

        {/* User Profile */}
        <div className="sidebar-profile">
          <Avatar className="sidebar-avatar" alt={userName} src="/path-to-avatar.jpg" />
          <h3 className="sidebar-username">{userName}</h3>
        </div>

        {/* Search bar */}
        <div className="sidebar-search">
          <input 
            type="text" 
            placeholder="Search..." 
            className="sidebar-search-input" 
            aria-label="Search" 
          />
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item">
              <a href="/home" className="sidebar-link" aria-label="Home">
                <HomeIcon className="sidebar-icon" /> Home
              </a>
            </li>
            <li className="sidebar-menu-item">
              <a href="/about" className="sidebar-link" aria-label="About">
                <InformationCircleIcon className="sidebar-icon" /> About
              </a>
            </li>
            <li className="sidebar-menu-item">
              <a href="/contact" className="sidebar-link" aria-label="Contact">
                <EnvelopeIcon className="sidebar-icon" /> Contact
              </a>
            </li>
            <li className="sidebar-menu-item">
              <a href="/login" className="sidebar-link" aria-label="Login">
                <ArrowRightOnRectangleIcon className="sidebar-icon" /> Login
              </a>
            </li>
            <li className="sidebar-menu-item">
              <button
                className="sidebar-dropdown-btn"
                onClick={handleSubmenuToggle}
                aria-expanded={submenuOpen}
                aria-controls="services-submenu"
                aria-label="Toggle Services Dropdown"
              >
                <InformationCircleIcon className="sidebar-icon" /> Services{' '}
                {submenuOpen ? <ChevronUpIcon className="sidebar-icon" /> : <ChevronDownIcon className="sidebar-icon" />}
              </button>
              {/* Dropdown submenu */}
              {submenuOpen && (
                <ul className="sidebar-submenu" id="services-submenu">
                  <li className="sidebar-submenu-item">
                    <a href="/service1" className="sidebar-submenu-link">Service 1</a>
                  </li>
                  <li className="sidebar-submenu-item">
                    <a href="/service2" className="sidebar-submenu-link">Service 2</a>
                  </li>
                  <li className="sidebar-submenu-item">
                    <a href="/service3" className="sidebar-submenu-link">Service 3</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <footer className="sidebar-footer">
          <p>&copy; 2024 MyBrand</p>
        </footer>
      </aside>
    </>
  );
};

export default Sidebar;
