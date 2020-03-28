import React from "react";
import CardDisplay from "./CardDisplay";
import "../App.css";

const Work = () => {
  const data = [
    {
      id: 1,
      mainImg: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      project_id: "01",
      name: "Messaging App",
      description:
        "This app is under construction at the moment. However, Front-end will be made using React and styling library Styled-Components/React Spring. Back-end is also setup using Node.js.",
      deployLink: "http://www.google.com",
      githubCodeLink: "http://www.google.com"
    },
    {
      id: 2,
      mainImg: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      project_id: "02",
      name: "Tic Tac Toe App",
      description:
        "This app is under construction at the moment. However, Front-end will be made using React and styling library Styled-Components/React Spring. Back-end is also setup using Node.js.",
      deployLink: "http://www.google.com",
      githubCodeLink: "http://www.google.com"
    },
    {
      id: 3,
      mainImg: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      project_id: "03",
      name: "Messaging App",
      description:
        "This app is under construction at the moment. However, Front-end will be made using React and styling library Styled-Components/React Spring. Back-end is also setup using Node.js.",
      deployLink: "http://www.google.com",
      githubCodeLink: "http://www.google.com"
    },
    {
      id: 4,
      mainImg: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      project_id: "04",
      name: "Tic Tac Toe App",
      description:
        "This app is under construction at the moment. However, Front-end will be made using React and styling library Styled-Components/React Spring. Back-end is also setup using Node.js.",
      deployLink: "http://www.google.com",
      githubCodeLink: "http://www.google.com"
    },
    {
      id: 5,
      mainImg: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      project_id: "05",
      name: "Messaging App",
      description:
        "This app is under construction at the moment. However, Front-end will be made using React and styling library Styled-Components/React Spring. Back-end is also setup using Node.js.",
      deployLink: "http://www.google.com",
      githubCodeLink: "http://www.google.com"
    },
    {
      id: 6,
      mainImg: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      project_id: "06",
      name: "Tic Tac Toe App",
      description:
        "This app is under construction at the moment. However, Front-end will be made using React and styling library Styled-Components/React Spring. Back-end is also setup using Node.js.",
      deployLink: "http://www.google.com",
      githubCodeLink: "http://www.google.com"
    },
    {
      id: 7,
      mainImg: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      project_id: "07",
      name: "Messaging App",
      description:
        "This app is under construction at the moment. However, Front-end will be made using React and styling library Styled-Components/React Spring. Back-end is also setup using Node.js.",
      deployLink: "http://www.google.com",
      githubCodeLink: "http://www.google.com"
    },
    {
      id: 8,
      mainImg: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      project_id: "08",
      name: "Tic Tac Toe App",
      description:
        "This app is under construction at the moment. However, Front-end will be made using React and styling library Styled-Components/React Spring. Back-end is also setup using Node.js.",
      deployLink: "http://www.google.com",
      githubCodeLink: "http://www.google.com"
    },
    {
      id: 9,
      mainImg: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      project_id: "09",
      name: "Messaging App",
      description:
        "This app is under construction at the moment. However, Front-end will be made using React and styling library Styled-Components/React Spring. Back-end is also setup using Node.js.",
      deployLink: "http://www.google.com",
      githubCodeLink: "http://www.google.com"
    },
    {
      id: 10,
      mainImg: "https://i.postimg.cc/hj1rcwSV/Templatefor-Site.jpg",
      project_id: "10",
      name: "Tic Tac Toe App",
      description:
        "This app is under construction at the moment. However, Front-end will be made using React and styling library Styled-Components/React Spring. Back-end is also setup using Node.js.",
      deployLink: "http://www.google.com",
      githubCodeLink: "http://www.google.com"
    }
  ];
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
          {data.map((each) => (
            <CardDisplay key={each.id} data={each} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
