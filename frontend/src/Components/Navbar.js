import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Style/Navbar.css";
import logo from "../Gallery/logo.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <img src={logo} alt="..." />
      <ul>
        <li className={location.pathname === "/" ? "activeTabs" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/contact" ? "activeTabs" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
