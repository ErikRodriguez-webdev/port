import React from "react";
import PicOfMe from "../img/myself_img.jpg";
import ImageDisplay from "./ImageDisplay";
import "../App.css";

const AboutMe = () => {
  const imgData = [
    {
      id: 1,
      css: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      height: 400
    },
    {
      id: 2,
      css: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      height: 400
    },
    {
      id: 3,
      css: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      height: 400
    },
    {
      id: 4,
      css: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      height: 400
    },
    {
      id: 5,
      css: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      height: 400
    }
  ];

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
        <div>
          {/* {imgData.map((each) => (
            <ImageDisplay key={each.id} imgData={each} />
          ))} */}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
