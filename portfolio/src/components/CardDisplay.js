import React from "react";
import Icon7 from "../img/view-icon.png";
import Icon8 from "../img/codefile-icon.png";
// import ExamplePic from "../img/TemplateforSite.JPG";
// Using image to link converter postimage.org

const CardDisplay = (props) => {
  const {
    mainImg,
    project_id,
    name,
    description,
    deployLink,
    githubCodeLink
  } = props.data;

  return (
    <div className="workCard">
      <img src={mainImg} alt="Project Capture" className="sizingImg" />
      <p className="workCardText">
        Project {project_id}
        <br />
        Name: {name}
        <br />
        Description: {description}
      </p>
      <div className="projectIcons">
        <a href={deployLink} target="_blank" rel="noopener noreferrer">
          <img
            src={Icon7}
            alt="View Laptop Icon"
            title="Visit Project"
            className="projectLink"
          />
        </a>

        <a href={githubCodeLink} target="_blank" rel="noopener noreferrer">
          <img
            src={Icon8}
            alt="Code File Icon"
            title="View Code"
            className="projectLink"
          />
        </a>
      </div>
    </div>
  );
};

export default CardDisplay;
