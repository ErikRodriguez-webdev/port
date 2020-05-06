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
      </div>
    </section>
  );
};

export default Skill;
