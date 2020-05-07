import React from "react";
import HomeIcon from "../img/home-icon.png";
import Portrait from "../img/portrait-myself.JPG";
import "../App.css";

const Home = () => {
  return (
    <section id="home">
      <div className="homeMainBox">
        <div className="cornerTag">
          <img src={HomeIcon} alt="home" />
          <h3>Home</h3>
        </div>

        <div className="homeContent">
          <div className="homeContentLeft">
            <h1>Hi there, I’m Erik Rodriguez.</h1>
            <h2>I’m a software Developer from Moreno Valley, CA.</h2>
            <div className="homeContactBtn">
              <button>Contact Me</button>
            </div>
          </div>

          <div className="homeContentRight">
            <div className="myself">
              <img src={Portrait} alt="portrait" />
            </div>
            <p>
              I have an interest in starting new projects or help further
              development on completed projects. What I have going on right now?
              Currently studying Full-Stack Web Development at Lambda School and
              on track to graduate Early September 2020. Are you taking any
              projects? Yes... soon. Collaborating with 2 teams and estimate
              completion is Late June 2020.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
