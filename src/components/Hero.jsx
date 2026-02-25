import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>171 EVCM LLC</h1>
        <p>Professional Real Estate & Property Management Services in Glastonbury, CT. Quality service and responsive support for property owners and tenants.</p>
        <Link to="/contact" className="cta-button">Contact Us Today</Link>
      </div>
    </section>
  );
}

export default Hero;