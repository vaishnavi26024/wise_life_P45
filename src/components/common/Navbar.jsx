import { NavLink } from "react-router-dom";
import "./Navbar.css";
import wiseLifeLogo from "../../assets/logo/wiselife-logo.png";

const Navbar = () => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* LEFT: LOGO */}
        <div className="navbar-logo">
          <img src={wiseLifeLogo} alt="Wise Life Logo" />
          <div>
            <span className="logo-wise">WISE</span>
            <span className="logo-life">LIFE</span>
          </div>
        </div>

        {/* RIGHT: MENU */}
        <ul className="nav-links">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li><NavLink to="/products" className="nav-link">Products</NavLink></li>
          <li><NavLink to="/business" className="nav-link">Business</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
