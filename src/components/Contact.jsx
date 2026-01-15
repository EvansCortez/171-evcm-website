import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item">
            <span className="info-icon">📞</span>
            <div className="info-content">
              <p><strong>Phone</strong></p>
              <p><a href="tel:8602643426">(860) 264-3426</a></p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div className="info-content">
              <p><strong>Address</strong></p>
              <p>2389 Main St, STE 100<br />Glastonbury, CT 06033</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">⏰</span>
            <div className="info-content">
              <p><strong>Business Hours</strong></p>
              <p>Monday - Friday<br />9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Your Name</span>
            <input 
              type="text" 
              name="name" 
              placeholder="John Doe" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </label>
          <label>
            <span>Email Address</span>
            <input 
              type="email" 
              name="email" 
              placeholder="john@example.com" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </label>
          <label>
            <span>Message</span>
            <textarea 
              name="message" 
              placeholder="How can we help you?" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;