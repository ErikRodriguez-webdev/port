import React from "react";
import {} from "react-router-dom";
import "./App.css";

//Nav/Footer
import Nav from "./nav and footer/Nav";
import Footer from "./nav and footer/Footer";

//Routes
import Home from "./components/Home";
import Story from "./components/Story";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Work />
      <Skill />
      <Story />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
