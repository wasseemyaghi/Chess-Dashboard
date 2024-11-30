import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/img/chesslogo.png";
export default function Navbar() {
  return (
    // <div className="container">
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
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
