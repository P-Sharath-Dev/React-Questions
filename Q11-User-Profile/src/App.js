import "./styles.css";
import { Component } from "react";
// Use Hero, Skills and About component to display your information
import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";

class App extends Component {
  render() {
    return (
      <>
        {/* render your component here  */}

        <Hero />
        <About />
        <Skills />
      </>
    );
  }
}
export default App;
