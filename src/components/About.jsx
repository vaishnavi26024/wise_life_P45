import React, { useState, useEffect } from 'react';
import { Zap, Target, Award, Shield, Lightbulb, Users, ArrowRight, ChevronRight } from 'lucide-react';
import './About.css';

const About = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating) return;
      
      if (e.deltaY > 0 && currentPage < 1) {
        setIsAnimating(true);
        setCurrentPage(1);
        setTimeout(() => setIsAnimating(false), 1000);
      } else if (e.deltaY < 0 && currentPage > 0) {
        setIsAnimating(true);
        setCurrentPage(0);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage, isAnimating]);

  const goToPage = (page) => {
    if (!isAnimating && page !== currentPage) {
      setIsAnimating(true);
      setCurrentPage(page);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const coreValues = [
    { icon: Shield, title: 'Integrity & Trust', color: '#FF6B35' },
    { icon: Lightbulb, title: 'Innovation', color: '#F7B801' },
    { icon: Users, title: 'Customer Centricity', color: '#00B4D8' },
    { icon: Award, title: 'Reliable Partnerships', color: '#9B59B6' },
    { icon: Zap, title: 'Sustainability', color: '#26DE81' }
  ];

  return (
    <div className="horizontal-container">
      {/* Page Indicator */}
      <div className="page-indicator">
        <div 
          className={`indicator-dot ${currentPage === 0 ? 'active' : ''}`}
          onClick={() => goToPage(0)}
        ></div>
        <div 
          className={`indicator-dot ${currentPage === 1 ? 'active' : ''}`}
          onClick={() => goToPage(1)}
        ></div>
      </div>

      {/* Navigation Arrow */}
      {currentPage === 0 && (
        <div className="scroll-hint" onClick={() => goToPage(1)}>
          <span>Scroll to explore</span>
          <ChevronRight size={24} />
        </div>
      )}

      {/* Pages Wrapper */}
      <div 
        className="pages-wrapper" 
        style={{ transform: `translateX(-${currentPage * 100}vw)` }}
      >
        {/* PAGE 1 - Hero & About */}
        <div className="page page-1">
          <div className="page-content">
            {/* Left Side - Text Content */}
            <div className="hero-content-left">
              <div className="logo-badge">WISE LIFE</div>
              <h1 className="main-title">
                About <span className="highlight-text">Us</span>
              </h1>
              <h2 className="hero-subtitle">
                Powering India's <span className="gradient-text">Sustainable Future</span>
              </h2>
              <p className="hero-description">
                Wise Life Enterprises LLP is a distribution-focused venture under <strong>iSOLAR Power ISP LLP</strong>, 
                bringing 9+ years of expertise in renewable energy. We're the authorised distributor for 
                <strong> PURE (Pur Energy Public Ltd)</strong> - pioneering EV mobility and energy storage solutions.
              </p>

              {/* Stats Grid */}
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">2000+</div>
                  <div className="stat-label">Solar Systems</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">9+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>

              {/* Quick Features */}
              <div className="quick-features">
                <div className="feature-badge">
                  <Zap size={18} />
                  <span>Trusted by 2000+ customers</span>
                </div>
                <div className="feature-badge">
                  <Target size={18} />
                  <span>Pan-India distribution</span>
                </div>
                <div className="feature-badge">
                  <Award size={18} />
                  <span>Quality certified</span>
                </div>
              </div>
            </div>

            {/* Right Side - Images */}
            <div className="hero-content-right">
              <div className="image-grid">
                <div className="main-image">
                  <img 
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop" 
                    alt="Solar Energy"
                  />
                  <div className="image-overlay">
                    <div className="overlay-text">Solar Solutions</div>
                  </div>
                </div>
                <div className="side-images">
                  <div className="small-image">
                    <img 
                      src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=300&fit=crop" 
                      alt="EV Charging"
                    />
                    <div className="image-overlay">
                      <div className="overlay-text">EV Mobility</div>
                    </div>
                  </div>
                  <div className="small-image">
                    <img 
                      src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop" 
                      alt="Energy Storage"
                    />
                    <div className="image-overlay">
                      <div className="overlay-text">Energy Storage</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Info Card */}
              <div className="floating-card">
                <div className="card-icon">
                  <Zap size={24} />
                </div>
                <div className="card-content">
                  <h4>Authorized Distributor</h4>
                  <p>PURE Energy Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 2 - Vision, Mission, Values & Legacy */}
        <div className="page page-2">
          <div className="page-content">
            {/* Top Section - Vision & Mission */}
            <div className="vm-section">
              <div className="vm-card vision-card">
                <div className="vm-icon">
                  <Target size={40} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become India's leading distribution partner in clean energy and sustainable living products, 
                  setting new standards for excellence.
                </p>
              </div>

              <div className="vm-card mission-card">
                <div className="vm-icon">
                  <Zap size={40} />
                </div>
                <h3>Our Mission</h3>
                <ul className="mission-list">
                  <li>
                    <ArrowRight size={18} />
                    <span>Deliver world-class products to the Indian market</span>
                  </li>
                  <li>
                    <ArrowRight size={18} />
                    <span>Empower stakeholders with eco-friendly solutions</span>
                  </li>
                  <li>
                    <ArrowRight size={18} />
                    <span>Support India's clean energy goals</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Middle Section - Core Values */}
            <div className="values-section">
              <h2 className="section-title">Our Core Values</h2>
              <div className="values-grid">
                {coreValues.map((value, index) => (
                  <div key={index} className="value-item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="value-icon" style={{ background: value.color }}>
                      <value.icon size={24} />
                    </div>
                    <span className="value-title">{value.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section - Legacy */}
            <div className="legacy-section">
              <div className="legacy-left">
                <h2 className="section-title">Our Legacy</h2>
                <p className="legacy-text">
                  Our parent company, <strong>iSOLAR Power ISP LLP</strong>, brings a proven track record 
                  of excellence with 2000+ installations across residential, commercial, and industrial sectors.
                </p>
                <div className="legacy-highlights">
                  <div className="highlight-item">
                    <Award size={24} />
                    <div>
                      <h4>2000+ Systems Installed</h4>
                      <p>Across all sectors</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <Shield size={24} />
                    <div>
                      <h4>Trusted Reputation</h4>
                      <p>Quality & transparency</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="legacy-right">
                <img 
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop" 
                  alt="Legacy"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div className="cta-container">
              <button className="cta-button">
                Partner With Us
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;