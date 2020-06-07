import React from "react";
import { workData } from "../utils/WorkData";
import WorkGrid from "./WorkGrid";
import WorkIcon from "../img/folder-icon.png";
import "../App.css";

const Work = () => {
  const data = workData;

  return (
    <section id="work">
      <div className="workMainBox">
        <div className="cornerTag">
          <img src={WorkIcon} alt="folder" />
          <h3>Work</h3>
        </div>

        <div className="workContent">
          {data.map((each) => (
            <WorkGrid key={each.id} data={each} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
