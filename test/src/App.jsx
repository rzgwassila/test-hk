import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Agenda from "./components/Agenda";
import Navbar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
    </Router>
  );
}

export default App;
