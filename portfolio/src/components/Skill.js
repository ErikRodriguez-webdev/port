import React from "react";
import SkillIcon from "../img/visible-icon.png";
import "../App.css";

const Skill = () => {
  return (
    <section id="skill">
      <div className="skillMainBox">
        <div className="cornerTag">
          <img src={SkillIcon} alt="eye" />
          <h3>Skill</h3>
        </div>

        <div className="skillContent">
          <div className="skillNavPlacement">
            <div className="skillNav">
              <div>Front-End</div>
              <div>Back-End</div>
              <div>Tools</div>
            </div>
          </div>

          <div className="skillResumeBtn">
            <button>Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
