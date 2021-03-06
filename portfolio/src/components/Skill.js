import React from "react";
import { useHistory } from "react-router-dom";
import SkillIcon from "../img/visible-icon.png";
import Fade from "react-reveal/Fade";
import "../App.css";

const Skill = () => {
  const history = useHistory();

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

  const resumeRoute = () => {
    history.push("/skill/resume");

    if (window.scrollY !== 0) {
      window.scroll(0, 0);
    }
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
                F.E.
              </div>
              <div
                className="skillNavBtn back-end"
                onClick={() => tabSelector("back-end")}
              >
                B.E.
              </div>
              <div className="skillNavBtn cs" onClick={() => tabSelector("cs")}>
                C.S.
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
              <Fade big>
                <ul>
                  <li>Front-End:</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS / Sass / Less</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Styled-Components</li>
                  <li>Axios</li>
                  <li>AJAX</li>
                </ul>
              </Fade>
            </div>
            <div className="skillDisplayHideText back-end">
              <Fade big>
                <ul>
                  <li>Back-End:</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Knex</li>
                  <li>SQLite</li>
                  <li>Cors</li>
                  <li>SuperTest</li>
                  <li>Jest</li>
                  <li>Postman / Insomnia</li>
                </ul>
              </Fade>
            </div>
            <div className="skillDisplayHideText cs">
              <Fade big>
                <ul>
                  <li>Computer Science:</li>
                  <li>Python</li>
                  <li>Singly / Doubly Linked List</li>
                  <li>Binary Search Trees</li>
                  <li>Iterative / Recursive Sorting</li>
                  <li>Hashtables</li>
                  <li>Breadth / Depth - Traversals / Searches</li>
                  <li>Computer Architecture / System Stack</li>
                  <li>Number Bases / Bitwise Operations</li>
                </ul>
              </Fade>
            </div>
            <div className="skillDisplayHideText tools">
              <Fade big>
                <ul>
                  <li>Tools:</li>
                  <li>MacOS / Windows</li>
                  <li>Terminal / Git</li>
                  <li>Github</li>
                  <li>Zoom / Slack / Email</li>
                  <li>AWS</li>
                  <li>Heroku</li>
                  <li>Zeit / Vercel</li>
                  <li>Netlify</li>
                </ul>
              </Fade>
            </div>
          </div>

          <div className="skillResumeBtn">
            <button onClick={resumeRoute}>Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
