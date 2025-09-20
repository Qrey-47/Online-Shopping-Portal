import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-grid">
        <div className="footer-section">
          <div className="header-brand" style={{ marginBottom: '1rem' }}>
            <div className="header-brand-icon">
              <Leaf size={20} />
            </div>
            <h5>SATTVA SKIN</h5>
          </div>
          <p>Natural skincare for your beautiful journey.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/shop">Products</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Care</h4>
          <ul>
            <li><Link to="/shipping">Shipping Info</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Get skincare tips and exclusive offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 SATTVA SKIN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;