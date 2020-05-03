import React from "react";
import MyChart from "./MyChart";
import Skill1 from "../img/html-5-100.png";
import Skill2 from "../img/css3-100.png";
import Skill3 from "../img/javascript-100.png";
import Skill4 from "../img/react-100.png";
import Skill5 from "../img/nodejs-100.png";
import Skill6 from "../img/python-100.png";
import Skill7 from "../img/ruby-100.png";

const Skill = () => {
  return (
    <div id="skill">
      <h2>Skill</h2>
      <MyChart />
      <h3 className="coreLang">Core Languages</h3>
      <div className="skillMainBox">
        <div className="skillCard">
          <img src={Skill1} alt="html logo" title="HTML 5" />
          <p>HTML 5</p>
        </div>

        <div className="skillCard">
          <img src={Skill2} alt="css logo" title="CSS 3" />
          <p>CSS 3</p>
        </div>

        <div className="skillCard">
          <img src={Skill3} alt="javascript logo" title="Javascript" />
          <p>Javascript</p>
        </div>

        <div className="skillCard">
          <img src={Skill4} alt="react logo" title="React" />
          <p>React</p>
        </div>

        <div className="skillCard">
          <img src={Skill5} alt="Nodejs logo" title="HTML 5" />
          <p>Nodejs</p>
        </div>

        <div className="skillCard">
          <img src={Skill6} alt="Python logo" title="Python" />
          <p>Python</p>
        </div>

        <div className="skillCard">
          <img src={Skill7} alt="Ruby logo" title="Ruby" />
          <p>Ruby</p>
        </div>
      </div>
      <p>Animation Most Familiar With (UNDER CONSTRUCTION)</p>
      <p>Developer Icons By: Icon8</p>
    </div>
  );
};

export default Skill;
