import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <h2>About 171 EVCM LLC</h2>
      <div className="about-content">
        <p>171 EVCM LLC is a trusted real estate and property management company serving Glastonbury, CT and the surrounding areas. We specialize in providing personalized, professional service to both property owners and tenants.</p>
        <p>Our focus is on clear communication, well-maintained properties, and responsive support. We understand that property management is about more than just collecting rent—it's about building lasting relationships and maintaining quality properties that people are proud to call home.</p>
      </div>
      <div className="stats">
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Client Satisfaction</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Emergency Support</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">Local</span>
          <span className="stat-label">Glastonbury Based</span>
        </div>
      </div>
    </section>
  );
}

export default About;