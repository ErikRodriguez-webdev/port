import React from "react";
import "./App.css";

//Nav/Footer
import Nav from "./nav and footer/Nav";
import Footer from "./nav and footer/Footer";

//Routes
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

const App = () => {
  //Icon color 00CCFF
  //Nav color slategrey
  //Nav hover color lightgrey
  //lock red color ff0000
  //lock green color 008000

  return (
    <div className="App">
      <Nav />
      <Home />
      <div className="allContent">
        <About />
        <Work />
        <Resume />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
