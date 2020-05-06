import React from "react";
import WorkIcon from "../img/folder-icon.png";
import "../App.css";

const Work = () => {
  return (
    <section id="work">
      <div className="workMainBox">
        <div className="cornerTag">
          <img src={WorkIcon} alt="folder" />
          <h3>Work</h3>
        </div>
      </div>
    </section>
  );
};

export default Work;
