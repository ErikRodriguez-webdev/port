import React from "react";
import SkillIcon from "../img/visible-icon.png";
import "../App.css";

const Skill = () => {
  const tabSelector = (tabName) => {
    const grabActive = document.querySelector(".skillNavBtnActive");
    grabActive.classList.remove("skillNavBtnActive");

    const grabSelectedTab = document.querySelector(`.${tabName}`);
    grabSelectedTab.classList.add("skillNavBtnActive");

    const grabTextDisplayed = document.querySelector(".skillDisplayRevealText");
    grabTextDisplayed.classList.remove("skillDisplayRevealText");
    grabTextDisplayed.classList.add("skillDisplayHideText");

    const grabNewTextDisplayed = document.querySelectorAll(`.${tabName}`);
    grabNewTextDisplayed[1].classList.remove("skillDisplayHideText");
    grabNewTextDisplayed[1].classList.add("skillDisplayRevealText");
  };

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
              <div
                className="skillNavBtn front-end skillNavBtnActive"
                onClick={() => tabSelector("front-end")}
              >
                Front-End
              </div>
              <div
                className="skillNavBtn back-end"
                onClick={() => tabSelector("back-end")}
              >
                Back-End
              </div>
              <div
                className="skillNavBtn tools"
                onClick={() => tabSelector("tools")}
              >
                Tools
              </div>
            </div>
          </div>

          <div className="skillDisplayPlacement">
            <div className="skillDisplayRevealText front-end">
              <ul>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>Redux</li>
                <li>HTML</li>
                <li>CSS / Sass / Less</li>
                <li>Styled-Components</li>
                <li>Axios</li>
                <li>AJAX</li>
              </ul>
            </div>
            <div className="skillDisplayHideText back-end">
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Knex.js</li>
                <li>SQLite</li>
                <li>Cors</li>
                <li>SuperTest</li>
                <li>Jest</li>
                <li>Postman / Insomnia</li>
              </ul>
            </div>
            <div className="skillDisplayHideText tools">
              <ul>
                <li>MacOS / Windows</li>
                <li>Terminal / Git</li>
                <li>Github</li>
                <li>Zoom</li>
                <li>Slack</li>
                <li>AWS</li>
                <li>Heroku</li>
                <li>Zeit / Vercel</li>
                <li>Netlify</li>
              </ul>
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
