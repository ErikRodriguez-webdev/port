import React from "react";
import { useHistory } from "react-router-dom";
import LeftArrow from "../img/arrow-left.png";
import MyResume from "../img/Erik Rodriguez Resume PDF.pdf";
import "../App.css";

const Resume = () => {
  const history = useHistory();
  return (
    <section className="resumePage">
      <div className="resumePageContainer">
        <div className="resumePageCornerTag" onClick={() => history.goBack()}>
          <div>
            <img src={LeftArrow} alt="arrow left" />
          </div>
          <h3>Go Back</h3>
        </div>
        <div className="resumePageTitle">Skill / Resume</div>
        <div className="resumeDocument">
          <iframe
            allowFullScreen
            src={MyResume}
            alt="pdf resume"
            title="Erik Rodriguez Resume"
            name="Erik Rodriguez Resume"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
