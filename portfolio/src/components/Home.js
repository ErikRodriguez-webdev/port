import React from "react";

import ImageDisplay from "./ImageDisplay";
import "../App.css";

const Home = () => {
  return (
    <div id="home">
      <div className="homeMainBox">
        <ImageDisplay />
        <div className="homeText">
          <h1>Hello and Welcome to My Port.</h1>
          <p>(WORK IN PROGRESS STILL UNDER CONSTRUCTION)</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
