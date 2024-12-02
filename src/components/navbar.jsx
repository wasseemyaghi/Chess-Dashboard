import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/img/chesslogo.png";
export default function Navbar() {
  return (
    // <div className="container">
    <nav className="navbar">
      <div className="navbar-logo">
        <div>
          <img src={logo} alt="Logo" className="navbar-logo-img" />
        </div>
        <div className="navbar-logo-title">
          <span>Chess Records</span>
        </div>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Users</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
    // </div>
  );
}
