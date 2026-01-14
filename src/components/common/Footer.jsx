import React, { useEffect, useState, useRef } from 'react';
import Logo from '../../assets/logo.png'; 
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="footer-container">
      <hr className="footer-divider" />
      
      <div className="footer-content">
        {/* Brand */}
        <div className={`animate-on-scroll hidden-left ${isVisible ? 'visible-state' : ''}`} 
             style={{ transitionDelay: '100ms' }}>
          <div className="footer-brand-header">
            <img src={Logo} alt="Wise Life" className="footer-logo" />
            <h3 className="footer-brand-name">WISE LIFE</h3>
          </div>
          <p className="footer-text">
            Innovating professional solutions for the ease of life. 
            Providing quality and excellence in every project.
          </p>
          <a href="https://www.wiselifee.com" target="_blank" rel="noreferrer" className="footer-link mt-4">
            www.wiselifee.com
          </a>
        </div>

        {/* Navigation */}
        <div className={`animate-on-scroll hidden-down ${isVisible ? 'visible-state' : ''}`}
             style={{ transitionDelay: '300ms' }}>
          <h4 className="footer-heading">Company</h4>
          <nav className="footer-nav">
            <a href="/" className="footer-link">Home</a>
            <a href="/about" className="footer-link">About Us</a>
            <a href="/services" className="footer-link">Services</a>
            <a href="/contact" className="footer-link">Contact</a>
          </nav>
        </div>

        {/* Address & Phone */}
        <div className={`animate-on-scroll hidden-right ${isVisible ? 'visible-state' : ''}`}
             style={{ transitionDelay: '500ms' }}>
          <h4 className="footer-heading">Address</h4>
          <p className="footer-text">
            602, 74 Downtown,<br />Baner, Pune - 411045
          </p>
          <div className="mt-4">
            <div className="phone-label">Phone</div>
            <a href="tel:+917796711722" className="footer-link">
              +91 7796 711 722 / +91 7875 711 722
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className={`footer-bottom animate-on-scroll ${isVisible ? 'visible-state' : 'hidden-state'}`}
           style={{ transitionDelay: '700ms' }}>
        <p>© 2026 WISE LIFE. ALL RIGHTS RESERVED.</p>
        
        {/* Updated Class here for spacing */}
        <div className="footer-legal-links">
          <a href="#" className="footer-legal-link">Privacy Policy</a>
          <a href="#" className="footer-legal-link">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;