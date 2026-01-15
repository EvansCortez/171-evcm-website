import React from 'react';

function Hero({ scrollToSection }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>171 EVCM LLC</h1>
        <p>Professional Real Estate & Property Management Services in Glastonbury, CT. Quality service and responsive support for property owners and tenants.</p>
        <a href="#contact" className="cta-button" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact Us Today</a>
      </div>
    </section>
  );
}

export default Hero;