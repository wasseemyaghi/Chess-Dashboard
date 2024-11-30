import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Userspage from "./pages/Userspage";
import Profilepage from "./pages/Profilepage";
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
