import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ mobileMenuOpen, toggleMobileMenu }) {
  const location = useLocation();
  
  const closeMobileMenu = () => {
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>171 EVCM</Link>
        <button className="mobile-menu-btn" aria-label="Toggle menu" onClick={toggleMobileMenu}>☰</button>
        <nav>
          <ul className={mobileMenuOpen ? 'active' : ''}>
            <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMobileMenu}>About</Link></li>
            <li><Link to="/properties" className={isActive('/properties') ? 'active' : ''} onClick={closeMobileMenu}>Properties</Link></li>
            <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={closeMobileMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;