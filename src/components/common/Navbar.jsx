import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Home, Phone } from "lucide-react";
import { useEffect } from "react"; // Import useEffect
import "./Navbar.css";
import wiseLifeLogo from "../../assets/logo/wiselife-logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle scrolling to a section on the same page
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Effect to scroll to section when hash changes (for in-page navigation)
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove '#'
      scrollToSection(sectionId);
    }
  }, [location.hash]); // Rerun when hash changes

  const handleHomeClick = (e) => {
    // Only prevent default if already on the homepage to handle smooth scroll
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection('home');
      navigate('/#home', { replace: true }); // Update URL hash without re-rendering
    } else {
      // If not on homepage, navigate to homepage and let useEffect handle scroll
      navigate('/#home');
    }
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-logo" onClick={handleHomeClick}> {/* Use simplified handleHomeClick */}
          <img src={wiseLifeLogo} alt="Wise Life Logo" />
          <div>
            <span className="logo-wise">WISE</span>
            <span className="logo-life">LIFE</span>
          </div>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/#home" onClick={handleHomeClick} className="nav-link">
              <span className="nav-item-content">
                <Home size={18} />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">About</NavLink> {/* Direct path */}
          </li>
          <li>
            <NavLink to="/products" className="nav-link">Products</NavLink> {/* Direct path */}
          </li>
          <li>
            <NavLink to="/business" className="nav-link">Business</NavLink> {/* Direct path */}
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              <span className="nav-item-content">
                <Phone size={18} />
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
