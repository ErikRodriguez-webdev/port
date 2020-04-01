import React from "react";
import PicOfMe from "../img/myself_img.jpg";
import "../App.css";

const AboutMe = () => {
  return (
    <>
      <h2>About</h2>
      <div className="aboutMainBox">
        <div className="aboutText">
          <p>
            My name is Erik Rodriguez and I am currently studying Full-Stack Web
            Development at Lambda School.
          </p>
        </div>
        <div className="aboutPhoto">
          <img src={PicOfMe} alt="Myself" title="Me" className="me" />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
