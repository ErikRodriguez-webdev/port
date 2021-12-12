import React from "react";
import { Switch, Route } from "react-router-dom";
import { Paper } from "@mui/material";

//Routes
import Nav from "./components/Nav/Nav.js";
import Greeting from "./components/Greeting/Greeting.js";
import ConnectSections from "./components/ConnectSections/ConnectSections.js";
import Footer from "./components/Footer/Footer.js";
import BackToTop from "./components/BackToTop/BackToTop.js";
import Resume from "./components/Resume";

const App = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Paper
            square
            elevation={0}
            sx={{
              width: "1000px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <Nav />
            <Greeting />
            <ConnectSections />
            <Footer />
            <BackToTop />
          </Paper>
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
    </>
  );
};

export default App;
