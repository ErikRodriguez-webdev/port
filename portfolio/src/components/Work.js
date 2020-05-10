import React, { useState, useEffect } from "react";
import { workData } from "../utils/WorkData";
import WorkCard from "./WorkCard";
import WorkIcon from "../img/folder-icon.png";
import "../App.css";

const Work = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(workData);
  }, []);

  console.log(data);

  return (
    <section id="work">
      <div className="workMainBox">
        <div className="cornerTag">
          <img src={WorkIcon} alt="folder" />
          <h3>Work</h3>
        </div>

        <div className="workContent">
          {data.map((each) => (
            <WorkCard key={each.id} data={each} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
