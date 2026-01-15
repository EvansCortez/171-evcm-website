import React from 'react';

function Properties() {
  return (
    <section id="properties" className="properties">
      <h2>Available Properties</h2>
      <div className="property-grid">
        <div className="property-card">
          <div className="property-image">🏠</div>
          <div className="property-details">
            <h3>123 Sample Street</h3>
            <p className="property-location">📍 Glastonbury, CT</p>
            <div className="property-features">
              <span>🛏️ 2 Beds</span>
              <span>🚿 1 Bath</span>
            </div>
            <p className="property-price">$1,800/month</p>
            <span className="property-status status-coming">Coming Soon</span>
          </div>
        </div>
        <div className="property-card">
          <div className="property-image">🏡</div>
          <div className="property-details">
            <h3>456 Example Avenue</h3>
            <p className="property-location">📍 Glastonbury, CT</p>
            <div className="property-features">
              <span>🛏️ 3 Beds</span>
              <span>🚿 2 Baths</span>
            </div>
            <p className="property-price">$2,300/month</p>
            <span className="property-status status-available">Available Now</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Properties;