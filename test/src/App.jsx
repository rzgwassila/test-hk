import React from "react";
import Home from "./components/Home";
import Agenda from "./components/Agenda";
import About from "./components/About";
import Navbar from "./components/NavBar";
import FAQ from "./components/FAQ";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="agenda">
        <Agenda />
      </section>

      <section id="faq">
        <FAQ />
      </section>
    </div>
  );
}

export default App;
