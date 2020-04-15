import React from "react";
import MovingBG from "./MovingBG";
import "../App.css";

const Home = () => {
  return (
    <>
      <div className="homeMainBox">
        <MovingBG />
        <div className="homeText">
          <h1>Hello and Welcome to My Port.</h1>
          <a href="#about">CLICK HERE TO CONTINUE</a>
          <p>(WORK IN PROGRESS STILL UNDER CONSTRUCTION)</p>
        </div>
      </div>
    </>
  );
};

export default Home;
