import React from "react";
import { workData } from "../utils/WorkData";
import WorkSlideshowCard from "./WorkSlideshowCard";
import WorkCard from "./WorkCard";
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

        <div className="workContentDesktop">
          <WorkSlideshowCard data={data} />
        </div>

        <div className="workContentMobile">
          {data.map((each) => (
            <WorkCard key={each.id} data={each} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
