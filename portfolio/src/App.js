import React from "react";
import "./App.css";
//Nav/Footer
import Nav from "./nav and footer/Nav";
import Footer from "./nav and footer/Footer";

//Routes
import { Route, Switch } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

const App = () => {
  //icon color 00CCFF
  //nav color slategrey
  //nav hover color lightgrey

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/skill" component={Skill} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
