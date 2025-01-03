import React from "react";
import { Link } from "react-router-dom";

import ChessBoard from "../assets/img/chessboard.svg";
import Tournament from "../assets/img/tournament.svg";
import SearchPawn from "../assets/img/searchpawn.svg";
import logo from "../assets/img/Chess_Records_Logo 1.png";
import "../styles/navbar.css";

export default function Navbar() {
  return (
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
          <img src={ChessBoard} alt="svglinkimage" />
          <Link to="/">All Chess Players</Link>
        </li>
        <li>
          <img src={Tournament} alt="svglinkimage" />
          <Link to="#">Chess Clubs</Link>
        </li>
        <li>
          <img src={SearchPawn} alt="svglinkimage" />
          <Link to="/#search-input">Search For Users</Link>
        </li>
      </ul>
    </nav>
  );
}
