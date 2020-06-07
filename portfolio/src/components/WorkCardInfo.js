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
      <div className="workPageContainer">
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
            <a
              href={data.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
            <a
              href={data.projectCode}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
          <p>{data.description}</p>

          <ul className="workPageList">
            {data.workBulletList.map((each) => (
              <li key={each.id}>{each.list}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkCardInfo;
