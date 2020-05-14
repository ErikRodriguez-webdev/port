import React from "react";
import "../App.css";

const WorkCard = (props) => {
  //Add closerlook and new component to route to
  return (
    <div className="workCard">
      <h2>{props.data.title}</h2>
      <div className="workCardImage">
        <img src={props.data.image} alt="placeholder desktop screen capture" />
      </div>
    </div>
  );
};

export default WorkCard;
