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
            <h2>A Software Engineer from Hemet, CA.</h2>
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
              I'm a graduate of{" "}
              <a
                href="https://lambdaschool.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="homeSchoolLink"
              >
                Lambda School's
              </a>{" "}
              Full-Stack Web Development {"&"} Computer Science track. My
              expertise is in creating front-end and back-end applications. I'm
              skilled with JavaScript, Python, React, Node, HTML, and CSS. In my
              spare time, I love to watch anime, read manga and immerse myself
              in sneaker-twitter. I'm currently breaking into the industry to
              find a great team to be apart of!
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
