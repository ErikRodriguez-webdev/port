import React from "react";
import PicOfMe from "../img/myself_img.jpg";
import ImageDisplay from "./ImageDisplay";
import "../App.css";

const AboutMe = () => {
  return (
    <>
      <h2>About</h2>
      <div className="aboutMainBox">
        <div className="aboutPhoto">
          <img src={PicOfMe} alt="Myself" title="Me" className="me" />
        </div>
        <div className="aboutText">
          <p>
            I'm Erik Rodriguez, a Software Engineer from Moreno Valley,
            California and currently studying Full-Stack Web Development at
            Lambda School. I have an interest in starting new projects or help
            further development on completed projects. The collection of images
            below are about family and personal interest. Thanks for reading
            this far!
          </p>
        </div>
        <ImageDisplay />
      </div>
    </>
  );
};

export default AboutMe;
