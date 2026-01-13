import React from 'react';
import '../components/About.css';


const About = () => {
  return (
    <div className="horizontal-container">
      <div className="pages-wrapper">
        <div className="page page-1">
          <div className="page-content">
            <div className="hero-content-left">
              <div className="logo-badge">Wise Life</div>
              <h1 className="main-title">
                Pioneering a <span className="highlight-text">Sustainable</span> Future
              </h1>
              <h2 className="hero-subtitle">
                With <span className="gradient-text">Innovative Solar</span> Solutions
              </h2>
              <p className="hero-description">
                At Wise Life, we are dedicated to providing cutting-edge solar energy solutions that empower communities, protect the environment, and pave the way for a brighter, more sustainable future.
              </p>
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Years of Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1,000+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Team Members</div>
                </div>
              </div>
              <div className="quick-features">
                <div className="feature-badge">
                  <span>Residential Solar</span>
                </div>
                <div className="feature-badge">
                  <span>Commercial Solutions</span>
                </div>
                <div className="feature-badge">
                  <span>Green Energy</span>
                </div>
              </div>
            </div>
            <div className="hero-content-right">
              <div className="image-grid">
                <div className="main-image">
                  <img src="https://images.unsplash.com/photo-1549957734-037b639e2743?w=1800&auto=format&fit=crop&q=80" alt="Solar Panels" />
                  <div className="image-overlay">
                    <div className="overlay-text">Powering Homes with Clean Energy</div>
                  </div>
                </div>
                <div className="side-images">
                  <div className="small-image">
                    <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1800&auto=format&fit=crop&q=80" alt="Wind Turbines" />
                  </div>
                  <div className="small-image">
                    <img src="https://images.unsplash.com/photo-1528732222109-2a17f413d289?w=1800&auto=format&fit=crop&q=80" alt="Solar Farm" />
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
                  <span>V</span>
                </div>
                <h3>Our Vision</h3>
                <p>To be a global leader in renewable energy, creating a world where clean energy is accessible to all, and our planet thrives for generations to come.</p>
              </div>
              <div className="vm-card mission-card">
                <div className="vm-icon">
                  <span>M</span>
                </div>
                <h3>Our Mission</h3>
                <ul className="mission-list">
                  <li>To provide high-quality, affordable solar solutions.</li>
                  <li>To innovate and push the boundaries of solar technology.</li>
                  <li>To educate and inspire a movement towards sustainable living.</li>
                </ul>
              </div>
            </div>
            <div className="legacy-section">
              <div className="legacy-left">
                <h2 className="section-title">Our Legacy of Excellence</h2>
                <p className="legacy-text">
                  For over a decade, Wise Life has been at the forefront of the solar revolution. Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for homeowners and businesses alike.
                </p>
                <div className="legacy-highlights">
                  <div className="highlight-item">
                    <span>Q</span>
                    <div>
                      <h4>Quality Products</h4>
                      <p>We use only the highest-quality materials to ensure your solar system is built to last.</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span>E</span>
                    <div>
                      <h4>Expert Installation</h4>
                      <p>Our team of certified professionals ensures a seamless and efficient installation process.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="legacy-right">
                <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&auto=format&fit=crop&q=80" alt="Solar Installation" />
              </div>
            </div>
            <div className="cta-container">
              <button className="cta-button">Join the Green Revolution</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
