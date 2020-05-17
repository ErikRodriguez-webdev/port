import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

const WorkCard = (props) => {
  const history = useHistory();
  console.log(history);
  //Add closerlook and new component to route to

  const closerlook = (obj) => {
    history.push(`/work/${obj.title}`, obj);
  };
  return (
    <div className="workCard" onClick={() => closerlook(props.data)}>
      <h2>{props.data.title}</h2>
      <div className="workCardImage">
        <img src={props.data.image} alt="placeholder desktop screen capture" />
      </div>
    </div>
  );
};

export default WorkCard;
