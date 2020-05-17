import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import LeftArrow from "../img/arrow-left.png";
import "../App.css";

const WorkCardInfo = () => {
  const history = useHistory();
  const location = useLocation();
  const data = location.state;

  return (
    <section className="workPage">
      <div className="workPageCornerTag" onClick={() => history.goBack()}>
        <div>
          <img src={LeftArrow} alt="arrow left" />
        </div>
        <h3>Go Back</h3>
      </div>

      <div className="workPageTitle">{`Work / ${data.title}`}</div>

      <div className="workPageInfoPlacement">
        <div className="workPageImg">
          <img src={data.image} alt="project snapshot" />
        </div>
        <div className="workPageBtn">
          <button>Visit Site</button>
          <button>View Code</button>
        </div>
        <p>{data.description}</p>
      </div>
    </section>
  );
};

export default WorkCardInfo;
