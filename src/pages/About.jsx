import React, { useState, useEffect } from 'react';
import { Zap, Target, Award, Shield, ArrowRight, ChevronRight, ArrowDown, ArrowLeft } from 'lucide-react'; // Added ArrowDown, ArrowLeft
import '../components/About.css';

const About = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Added isMobile state

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []); // Added isMobile useEffect

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

    if (!isMobile) { // Apply wheel event only if not mobile
      window.addEventListener("wheel", handleWheel, { passive: true });
    }
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentPage, isAnimating, isMobile]); // Added isMobile to dependencies

  const goToPage = (page) => {
    if (!isMobile) { // Added isMobile check
      if (!isAnimating && page !== currentPage) {
        setIsAnimating(true);
        setCurrentPage(page);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    }
  };

  const handleExploreClick = () => { // Added handleExploreClick
    goToPage(1);
  };

  const handleGoBack = () => { // Added handleGoBack
    goToPage(0);
    // if (onUnlockScroll) { // Removed onUnlockScroll as it's not passed here
    //   onUnlockScroll();
    // }
  };

  return (
    <div className="horizontal-container">
      {/* Page Indicator */}
      {!isMobile && ( // Conditional rendering for mobile
        <div className="page-indicator">
          <div
            className={`indicator-dot ${currentPage === 0 ? "active" : ""}`}
            onClick={() => goToPage(0)}
          />
          <div
            className={`indicator-dot ${currentPage === 1 ? "active" : ""}`}
            onClick={() => goToPage(1)}
          />
        </div>
      )}

      {/* Scroll Hint */}
      {currentPage === 0 && !isMobile && ( // Conditional rendering for mobile
        <div className="scroll-hint" onClick={handleExploreClick}>
          <span>Scroll to explore</span>
          <ChevronRight size={24} />
        </div>
      )}
      
      {/* On Page 2, show navigation buttons */}
      {currentPage === 1 && !isMobile && ( // Conditional rendering for mobile
        <div className="about-nav-buttons">
          <button onClick={handleGoBack} className="about-nav-button">
            Go Back
          </button>
        </div>
      )}

      {/* Pages Wrapper */}
      <div
        className="pages-wrapper"
        style={!isMobile ? { transform: `translateX(-${currentPage * 100}vw)` } : {}} // Conditional style for mobile
      >
        {/* PAGE 1 */}
<div className="page page-1">
  <div className="page-content">
    <div className="hero-content-left">
      {/* <div className="logo-badge">WISE LIFE</div> */}

      <h1 className="main-title">
        About <span className="highlight-text">Us</span>
      </h1>

      <h2 className="hero-subtitle">
        Powering India's{" "}
        <span className="gradient-text">Sustainable Future</span>
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


        {/* PAGE 2 */}
        <div className="page page-2">
          <div className="page-content">
            {/* Vision & Mission */}
            <div className="vm-section">
              <div className="vm-card">
                <div className="vm-icon">
                  <Target size={40} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become India's leading distribution partner in clean energy
                  solutions.
                </p>
              </div>

              <div className="vm-card mission-card">
                <div className="vm-icon">
                  <Zap size={40} />
                </div>
                <h3>Our Mission</h3>
                <ul className="mission-list">
                  <li>
                    <ArrowRight size={18} /> Deliver world-class products
                  </li>
                  <li>
                    <ArrowRight size={18} /> Promote eco-friendly solutions
                  </li>
                  <li>
                    <ArrowRight size={18} /> Support clean energy goals
                  </li>
                </ul>
              </div>
            </div>

            {/* Our Legacy */}
            <div className="legacy-section">
              <div className="legacy-left">
                <h2 className="section-title">Our Legacy</h2>
                <p className="legacy-text">
                  Our parent company <strong>iSOLAR Power ISP LLP</strong> has
                  successfully completed{" "}
                  <strong>2000+ installations</strong> across India.
                </p>

                <div className="legacy-highlights">
                  <div className="highlight-item">
                    <Award size={24} />
                    <div>
                      <h4>2000+ Systems</h4>
                      <p>Installed Nationwide</p>
                    </div>
                  </div>

                  <div className="highlight-item">
                    <Shield size={24} />
                    <div>
                      <h4>Trusted Brand</h4>
                      <p>Quality & Reliability</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="legacy-right">
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7"
                  alt="Our Legacy"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="cta-container" />
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default About;
