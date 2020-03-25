import React from "react";
import PicOfMe from "../img/myself_img.jpg";
import "../App.css";

const AboutMe = () => {
  return (
    <>
      <h2>Hello and Welcome to my port.</h2>
      <div className="aboutMainBox">
        <div className="aboutText">
          <p>
            I'm Erik and I'm a Software Engineer from Moreno Valley, California.
          </p>
        </div>
        <div className="aboutPhoto">
          <img src={PicOfMe} alt="Myself" className="me" />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
