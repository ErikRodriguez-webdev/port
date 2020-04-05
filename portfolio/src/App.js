import React from "react";
import { useTransition, animated, config } from "react-spring";
import "./App.css";
//Nav/Footer
import Nav from "./nav and footer/Nav";
import Footer from "./nav and footer/Footer";

//Routes
import { Route, Switch, useLocation } from "react-router-dom";
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

  //Page Transition Animation
  const location = useLocation();

  const transitions = useTransition(location, (location) => location.pathname, {
    unique: true,
    reset: true,
    initial: null,
    from: {
      transform: "translate3d(100%,0,0)",
    },
    enter: {
      transform: "translate3d(0%,0,0)",
    },
    leave: {
      opacity: 0,
    },
    config: config.stiff,
  });

  return (
    <div className="App">
      <Nav />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/skill" component={Skill} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </animated.div>
      ))}
      <Footer />
    </div>
  );
};

export default App;
