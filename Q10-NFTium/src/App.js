import "./styles.css";
import { Component } from "react";
import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
