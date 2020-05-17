import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

const WorkCard = (props) => {
  const history = useHistory();

  const closerlook = (obj) => {
    history.push(`/work/${obj.title}`, obj);

    if (window.scrollY !== 0) {
      window.scroll(0, 0);
    }
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
