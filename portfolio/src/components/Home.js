import React from "react";
import backgroundVideo4k from "../vid/backgroundVideo4k.mp4";
import backgroundStill from "../img/backgroundStill.jpg";
import { useHistory } from "react-router-dom";
import "../App.css";

const Home = () => {
  const history = useHistory();

  return (
    <div className="homeMainBox">
      <video autoPlay loop muted className="video">
        <source src={backgroundVideo4k} type="video/mp4" />
        Your browser does not support the video.
      </video>
      <img
        src={backgroundStill}
        alt="Background still capture from video"
        className="mobileBG"
      />
      <div className="homeCenterContent">
        <div className="homeText">
          <h1>Hello and Welcome to My Port.</h1>
          <button onClick={() => history.push("/about")}>
            CLICK HERE TO CONTINUE
          </button>
          <p>(WORK IN PROGRESS STILL UNDER CONSTRUCTION)</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
