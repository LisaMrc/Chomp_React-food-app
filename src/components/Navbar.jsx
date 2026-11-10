import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({}) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img
            src="/assets/Icons/favicon.svg"
            alt="Chomp Logo"
            className="logo"
          ></img>
        </a>
      </div>
      <div className="navbar-right">
        <Link to="/favorites" className="nav-item">
          <span className="nav-text">Favorite recipes</span>
          <img src="/assets/Icons/heart.svg" alt="Heart Icon" />
        </Link>
      </div>
    </nav>
  );
}
