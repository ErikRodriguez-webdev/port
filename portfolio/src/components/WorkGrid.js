import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

const WorkGrid = (props) => {
  const history = useHistory();

  const closerlook = (obj) => {
    history.push(`/work/${obj.title}`, obj);

    if (window.scrollY !== 0) {
      window.scroll(0, 0);
    }
  };

  return (
    <div className="workGrid" onClick={() => closerlook(props.data)}>
      <h4>{props.data.title}</h4>
      <div className="workGridImage">
        <img src={props.data.image} alt="desktop screen capture" />
      </div>
    </div>
  );
};

export default WorkGrid;
