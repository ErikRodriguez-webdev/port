import React, { useState } from "react";
import "../App.css";

const WorkSlideshowCard = (props) => {
  const [counter, setCounter] = useState(0);
  const slide = props.data[counter];

  const forward = () => {
    if (counter >= 3) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const back = () => {
    if (counter <= 0) {
      setCounter(3);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="workSlideshowCard">
      <div>
        <button onClick={back} className="workSlideshowNavBtn">
          back
        </button>
      </div>
      <div className="workSlideshowCenter">
        <p>{`${counter + 1}/${props.data.length}`}</p>
        <div className="workSlideshowImage">
          <img src={slide.image} alt="placeholder desktop screen capture" />
        </div>
        <div className="workSlideshowTitleBtn">
          <h2 className="workSlideTitle">{slide.title}</h2>
          <a
            href={slide.deployedLink}
            rel="noopener noreferrer"
            className="workSlideshowBtns"
          >
            Visit Site
          </a>
          <a
            href={slide.projectCode}
            target="_blank"
            rel="noopener noreferrer"
            className="workSlideshowBtns"
          >
            View Code
          </a>
        </div>
        <p>{slide.description}</p>
      </div>
      <div>
        <button
          onClick={forward}
          target="_blank"
          className="workSlideshowNavBtn"
        >
          forward
        </button>
      </div>
    </div>
  );
};

export default WorkSlideshowCard;
