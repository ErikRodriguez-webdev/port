import React from "react";
import { Switch, Route } from "react-router-dom";
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
import WorkCardInfo from "./components/WorkCardInfo";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Nav />
          <Home />
          <Work />
          <Skill />
          <Story />
          <Contact />
          <Footer />
        </Route>
        <Route exact path="/work/:titleApp">
          <WorkCardInfo />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
