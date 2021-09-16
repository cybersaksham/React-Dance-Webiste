import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Style/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
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
