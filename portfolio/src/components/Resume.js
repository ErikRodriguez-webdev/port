import React from "react";
import MyResume from "../img/ErikRodriguezResume.pdf";
import "../App.css";

const Resume = () => {
  return (
    <section style={{ width: "100%", height: "100vh" }}>
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
    </section>
  );
};

export default Resume;
