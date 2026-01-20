import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Home, Phone, Menu, X } from "lucide-react";
import { useEffect, useState } from "react"; // Import useEffect
import "./Navbar.css";
import wiseLifeLogo from "../../assets/logo/wiselife-logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to handle scrolling to a section on the same page
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
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
    setIsOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-logo" onClick={handleHomeClick}>
          <img src={wiseLifeLogo} alt="Wise Life Logo" />
          <div>
            <span className="logo-wise">WISE</span>
            <span className="logo-life">LIFE</span>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/#home" onClick={handleHomeClick} className="nav-link">
              <span className="nav-item-content">
                Home
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to="/products" className="nav-link" onClick={() => setIsOpen(false)}>Products</NavLink>
          </li>
          <li>
            <NavLink to="/business" className="nav-link" onClick={() => setIsOpen(false)}>Business</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
              <span className="nav-item-content">
                Contact
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
