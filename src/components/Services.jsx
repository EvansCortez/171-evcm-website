import React from 'react';

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-card fade-in">
          <span className="service-icon">🏢</span>
          <h3>Property Management</h3>
          <p>Comprehensive management services including maintenance coordination, rent collection, and tenant relations for property owners.</p>
        </div>
        <div className="service-card fade-in">
          <span className="service-icon">🤝</span>
          <h3>Leasing Services</h3>
          <p>Professional leasing services including marketing, tenant screening, lease preparation, and move-in coordination.</p>
        </div>
        <div className="service-card fade-in">
          <span className="service-icon">🔧</span>
          <h3>Maintenance & Repairs</h3>
          <p>Responsive maintenance services ensuring properties are well-maintained and issues are addressed promptly.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;