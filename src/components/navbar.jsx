import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/img/Chess_Records_Logo 1.png";
import svglinkone from "../assets/img/img-link-one.svg";
import svglinktwo from "../assets/img/img-link-two.svg";
import svglinkthree from "../assets/img/img-link-three.svg";
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
          <img src={svglinkone} alt="svglinkimage" />
          <Link to="/">All Chess Players</Link>
        </li>
        <li>
          <img src={svglinktwo} alt="svglinkimage" />
          <Link to="#">Chess Clubs</Link>
        </li>
        <li>
          <img src={svglinkthree} alt="svglinkimage" />
          <Link to="#">Search For Users</Link>
        </li>
      </ul>
    </nav>
    // </div>
  );
}
