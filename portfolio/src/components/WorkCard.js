import React from "react";
import "../App.css";

const WorkCard = (props) => {
  return (
    <div className="workCard">
      <div className="workCardImage">
        <img src={props.data.image} alt="placeholder desktop screen capture" />
      </div>
      <div className="workCardBtn">
        <button>View More</button>
      </div>
    </div>
  );
};

export default WorkCard;
