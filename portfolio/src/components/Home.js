import React from "react";
import HomeIcon from "../img/home-icon.png";
import Portrait from "../img/portrait-myself.JPG";
import { Link } from "react-scroll";
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
            <h2>I’m a Software Engineer from Moreno Valley, CA.</h2>
            <div className="myself">
              <img src={Portrait} alt="portrait" />
            </div>
          </div>

          <div className="homeContentRight">
            <i>
              I’m on a mission to make an unforgettable impact on the lives of
              others and help those around me.
            </i>
            <br />
            <br />
            <p>
              I have an interest in starting new projects or help further
              development on existing projects. What I have going on right now?
              Currently studying Full-Stack Web Development at Lambda School and
              on track to graduate Early September 2020.
            </p>
            <div className="homeContactBtn">
              <Link smooth duration={1000} to="contact">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
