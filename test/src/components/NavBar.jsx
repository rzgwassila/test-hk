import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#agenda">Agenda</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
