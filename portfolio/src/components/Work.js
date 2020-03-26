import React from "react";
import "../App.css";
import ExamplePic from "../img/TemplateforSite.JPG";

const Work = () => {
  return (
    <>
      <h2>Works</h2>
      <div className="workMainBox">
        <div className="workText">
          <p>
            Email: Eric19.21.03@gmail.com
            <br />
            Github: https://github.com/ErikRodriguez-webdev
          </p>
        </div>
        <div className="workProjects">
          <div className="workCard">
            <img src={ExamplePic} alt="Project Capture" className="sizingImg" />
            <p className="workCardText">
              Project 001
              <br />
              Name: Messaging App
              <br />
              Description: This app is under construction at the moment.
              However, Front-end will be made using React and styling library
              Reactstrap/Bootstrap. Back-end is setup using Node.js.
            </p>
          </div>

          <div className="workCard">
            <img src={ExamplePic} alt="Project Capture" className="sizingImg" />
            <p className="workCardText">
              Project 002
              <br />
              Name: Tic Tac Toe App
              <br />
              Description: This app is under construction at the moment.
              However, Front-end will be made using React and styling library
              Styled-Components/React Spring. Back-end is also setup using
              Node.js.
            </p>
          </div>

          <div className="workCard">
            <img src={ExamplePic} alt="Project Capture" className="sizingImg" />
            <p className="workCardText">
              Project 001
              <br />
              Name: Messaging App
              <br />
              Description: This app is under construction at the moment.
              However, Front-end will be made using React and styling library
              Reactstrap/Bootstrap. Back-end is setup using Node.js.
            </p>
          </div>

          <div className="workCard">
            <img src={ExamplePic} alt="Project Capture" className="sizingImg" />
            <p className="workCardText">
              Project 002
              <br />
              Name: Tic Tac Toe App
              <br />
              Description: This app is under construction at the moment.
              However, Front-end will be made using React and styling library
              Styled-Components/React Spring. Back-end is also setup using
              Node.js.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
