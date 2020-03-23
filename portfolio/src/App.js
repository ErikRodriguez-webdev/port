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

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route path="/work" component={Work} />
        <Route path="/resume" component={Resume} />
        <Route path="/skill" component={Skill} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
