import React, { useState } from "react";
import CardDisplay from "./CardDisplay";
import Icon9 from "../img/github-icon.png";
import Icon12 from "../img/lock-open-icon.png";
import Icon13 from "../img/lock-closed-icon.png";
import "../App.css";

const Work = () => {
  //Master switch 3D animation
  const [lock, setLock] = useState(false);

  const projectData = [
    {
      id: 1,
      mainImg: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      project_id: "01",
      name: "Messaging App",
      description:
        "This app is under construction at the moment. However, Front-end will be made using React and styling library Styled-Components/React Spring. Back-end is also setup using Node.js.",
      deployLink: "http://www.google.com",
      githubCodeLink: "http://www.google.com",
    },
    {
      id: 2,
      mainImg: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      project_id: "02",
      name: "Tic Tac Toe App",
      description:
        "This app is under construction at the moment. However, Front-end will be made using React and styling library Styled-Components/React Spring. Back-end is also setup using Node.js.",
      deployLink: "http://www.google.com",
      githubCodeLink: "http://www.google.com",
    },
    {
      id: 3,
      mainImg: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      project_id: "03",
      name: "Messaging App",
      description:
        "This app is under construction at the moment. However, Front-end will be made using React and styling library Styled-Components/React Spring. Back-end is also setup using Node.js.",
      deployLink: "http://www.google.com",
      githubCodeLink: "http://www.google.com",
    },
  ];

  return (
    <>
      <h2>Work</h2>
      <div className="workMainBox">
        <div className="githubBtn" title="My GitHub Profile">
          <a
            href="https://github.com/ErikRodriguez-webdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Icon9} alt="Github Icon" />
          </a>
        </div>
        <div>
          {lock === false ? (
            <div
              onClick={() => setLock(!lock)}
              title="3D Animation Unlocked"
              className="animationSwitch"
            >
              <p>3D Animation Getting Annoying?</p>
              <img src={Icon12} alt="Lock Open Icon" />
            </div>
          ) : (
            <div
              onClick={() => setLock(!lock)}
              title="3D Animation Locked"
              className="animationSwitch"
            >
              <p>Want 3D Animation Back?</p>
              <img src={Icon13} alt="Lock Closed Icon" />
            </div>
          )}
        </div>
        <div className="workProjects">
          {projectData.map((each) => (
            <CardDisplay key={each.id} projectData={each} lock={lock} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
