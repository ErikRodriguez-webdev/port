import React from "react";
import { useHistory } from "react-router-dom";
import LeftArrow from "../img/arrow-left.png";
import MyResume from "../img/Erik Rodriguez Resume PDF.pdf";
import "../App.css";

const Resume = () => {
  // const history = useHistory();
  return (
    // <section className="resumePage">
    //   <div className="resumePageContainer">
    //     <div className="resumePageCornerTag" onClick={() => history.goBack()}>
    //       <div>
    //         <img src={LeftArrow} alt="arrow left" />
    //       </div>
    //       <h3>Go Back</h3>
    //     </div>
    //     <div className="resumePageTitle">Skill / Resume</div>
    //   <div className="resumeDocument">
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src={MyResume}
        alt="pdf resume"
        title="Erik Rodriguez Resume"
        name="Erik Rodriguez Resume"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        width="100%"
        height="100%"
        scrolling="auto"
      />
    </div>
    //   </div>
    // </section>
  );
};

export default Resume;
