import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Userspage from "./pages/Users";
import Profilepage from "./pages/Profile";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Userspage />} />
        <Route path="/Profilepage/:username" element={<Profilepage />} />
      </Routes>
    </Router>
  );
}

export default App;
