import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Userspage from "./pages/Users";
import Profilepage from "./pages/Profile";
import Club from "./pages/Club";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Userspage />} />
        <Route path="/Profilepage/:username" element={<Profilepage />} />
        <Route path="/Club/:id" element={<Club />} />
      </Routes>
    </Router>
  );
}

export default App;
