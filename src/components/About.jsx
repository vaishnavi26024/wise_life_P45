import React, { useState, useEffect } from 'react';
import { Zap, Target, Award, Shield, ArrowRight, ChevronRight, ArrowDown, ArrowLeft } from 'lucide-react';
import "../components/About.css";

const About = ({ externalPage = 0 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Sync with parent scroll
  useEffect(() => {
    if (!isMobile) {
      goToPage(externalPage);
    }
  }, [externalPage, isMobile]);

  const goToPage = (page) => {
    if (!isMobile) {
      if (!isAnimating && page !== currentPage) {
        setIsAnimating(true);
        setCurrentPage(page);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    }
  };

  const handleExploreClick = () => {
    goToPage(1);
    // Ideally, scrolling down naturally handles this now.
    // But click support remains valid for UX.
  };

  const handleGoBack = () => {
    goToPage(0);
  };

  return (
    <div className={`horizontal-container ${currentPage !== 0 ? 'scrolling-active' : ''}`}>
      {/* -- CONTROLS -- */}
      {!isMobile && (
        <>
          {!isMobile && (
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
          )}

          {/* On Page 1, show "Scroll to Explore" button */}
          {currentPage === 0 && !isMobile && (
            <div className="scroll-hint" onClick={handleExploreClick} aria-label="Scroll to explore" role="button">
              <span>Scroll to explore</span>
              <ChevronRight size={24} />
            </div>
          )}

          {/* On Page 2, show navigation buttons */}
          {currentPage === 1 && !isMobile && (
            <div className="about-nav-buttons">
              <button onClick={handleGoBack} className="about-nav-button" aria-label="Go Back">
                Go Back
              </button>
            </div>
          )}
        </>
      )}


      <div
        className="pages-wrapper"
        style={!isMobile ? { transform: `translateX(-${currentPage * 100}vw)` } : {}}
      >
        <div className="page page-1">
          <div className="page-content">
            <div className="hero-content-left">
              {/* <div className="logo-badge"></div> */}
              <h1 className="main-title">
                About <span className="highlight-text">Us</span>
              </h1>
              <h2 className="hero-subtitle">
                Powering India's <span className="gradient-text">Sustainable Future</span>
              </h2>
              <p className="hero-description">
                Wise Life Enterprises LLP is a distribution-focused venture under
                <strong> iSOLAR Power ISP LLP</strong>, bringing 9+ years of expertise
                in renewable energy.
              </p>

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

            <div className="hero-content-right">
              <div className="image-grid">
                <div className="main-image">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
                    alt="Solar Energy"
                  />
                </div>
                <div className="side-images">
                  <div className="small-image">
                    <img
                      src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7"
                      alt="EV Charging"
                    />
                  </div>
                  <div className="small-image">
                    <img
                      src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
                      alt="Energy Storage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page page-2">
          <div className="page-content">
            <div className="vm-section">
              <div className="vm-card">
                <div className="vm-icon">
                  <Target size={40} />
                </div>
                <h3>Our Vision</h3>
                <p>To become a leading, trusted
                  distribution partner in clean energy and sustainable living products across
                  India
                </p>
              </div>

              <div className="vm-card mission-card">
                <div className="vm-icon">
                  <Zap size={40} />
                </div>
                <h3>Our Mission</h3>
                <ul className="mission-list">
                  <li><ArrowRight size={18} /> Deliver world-class products</li>
                  <li><ArrowRight size={18} /> Promote eco-friendly solutions</li>
                  <li><ArrowRight size={18} /> Support clean energy goals</li>
                </ul>
              </div>
            </div>

            <div className="legacy-section">
              <div className="legacy-left">
                <h2 className="section-title">Our Legacy</h2>
                <p className="legacy-text">
                  Backed by 2000+ installations across India.
                </p>
                <div className="legacy-card-container">
                  <div className="legacy-card">
                    <Award size={36} className="legacy-card-icon" />
                    <div>
                      <h3 className="legacy-card-title">2000+ Systems Installed</h3>
                      <p className="legacy-card-subtitle">Across all sectors</p>
                    </div>
                  </div>
                  <div className="legacy-card">
                    <Shield size={36} className="legacy-card-icon" />
                    <div>
                      <h3 className="legacy-card-title">Trusted Reputation</h3>
                      <p className="legacy-card-subtitle">Quality & transparency</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="legacy-right">
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7"
                  alt="Legacy"
                />
              </div>
            </div>

            <div className="cta-container">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
