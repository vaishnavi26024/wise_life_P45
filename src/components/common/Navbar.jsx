import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* LEFT: LOGO */}
        <div className="navbar-logo">
          <span className="logo-wise">WISE</span>
          <span className="logo-life">LIFE</span>
        </div>

        {/* RIGHT: MENU */}
        <ul className="nav-links">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li><NavLink to="/" className="nav-link">Products</NavLink></li>
          <li><NavLink to="/business" className="nav-link">Business</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
