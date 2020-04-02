import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Icon7 from "../img/view-icon.png";
import Icon8 from "../img/codefile-icon.png";
// import ExamplePic from "../img/TemplateforSite.JPG";
// Using image to link converter postimage.org

//3D Card Animation
const calculate = (x, y) => {
  return [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1
  ];
};

const transition3D = (x, y, s) => {
  return `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
};

//Component Starts Here
const CardDisplay = (props) => {
  const {
    mainImg,
    project_id,
    name,
    description,
    deployLink,
    githubCodeLink
  } = props.data;

  //Card Slide Animation
  const [toggle, setToggle] = useState(false);

  //3D Card Animation
  const [settings, setSettings] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 150, friction: 50 }
  }));

  return (
    <animated.div
      onClick={() => setToggle(!toggle)}
      onMouseMove={({ clientX: x, clientY: y }) =>
        setSettings({ xys: calculate(x, y) })
      }
      onMouseLeave={() => setSettings({ xys: [0, 0, 1] })}
      style={{ transform: settings.xys.interpolate(transition3D) }}
      className="workCard"
    >
      <img src={mainImg} alt="Project Capture" className="sizingImg" />
      {toggle ? (
        <>
          <p className="workCardText">
            Project {project_id}
            <br />
            Name: {name}
            <br />
            Description: {description}
          </p>
          <div className="projectIcons">
            <a
              href={deployLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Site"
              className="projectLink"
            >
              <img src={Icon7} alt="View Laptop Icon" />
            </a>

            <a
              href={githubCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              title="View Code"
              className="projectLink"
            >
              <img src={Icon8} alt="Code File Icon" />
            </a>
          </div>
        </>
      ) : null}
    </animated.div>
  );
};

export default CardDisplay;
