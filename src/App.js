import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Homepage from "./pages/Homepage";
import Profilepage from "./pages/Profilepage";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Profilepage/:username" element={<Profilepage />} />
      </Routes>
    </Router>
  );
}

export default App;
