import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Pet Sales</h4>
            <p>Find your perfect companion</p>
          </div>
          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/main">Browse Pets</a></li>
              <li><a href="/sell-pet">Sell Pet</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Support</h5>
            <ul>
              <li><a href="/about">Help Center</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Pet Sales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;