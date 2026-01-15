import React from 'react';

function Header({ mobileMenuOpen, toggleMobileMenu, scrollToSection }) {
  return (
    <header>
      <div className="header-container">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>171 EVCM</a>
        <button className="mobile-menu-btn" aria-label="Toggle menu" onClick={toggleMobileMenu}>☰</button>
        <nav>
          <ul className={mobileMenuOpen ? 'active' : ''}>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#properties" onClick={(e) => { e.preventDefault(); scrollToSection('properties'); }}>Properties</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;