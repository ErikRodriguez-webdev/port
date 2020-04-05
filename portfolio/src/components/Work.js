import React from "react";
import CardDisplay from "./CardDisplay";
import Icon9 from "../img/github-icon.png";
import "../App.css";

const Work = () => {
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
    {
      id: 4,
      mainImg: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      project_id: "04",
      name: "Tic Tac Toe App",
      description:
        "This app is under construction at the moment. However, Front-end will be made using React and styling library Styled-Components/React Spring. Back-end is also setup using Node.js.",
      deployLink: "http://www.google.com",
      githubCodeLink: "http://www.google.com",
    },
    {
      id: 5,
      mainImg: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      project_id: "05",
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
        <p>Testing Functionality (UNDER CONSTRUCTION WITH PLACEHOLDER DATA)</p>
        <div className="workProjects">
          {projectData.map((each) => (
            <CardDisplay key={each.id} projectData={each} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
