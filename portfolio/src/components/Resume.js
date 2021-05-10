import React from "react";
import MyResume from "../img/ErikRodriguezLongResume.pdf";
import "../App.css";

const Resume = () => {
  return (
    <section style={{ width: "100%", height: "100vh" }}>
      <iframe
        src={MyResume}
        alt="pdf resume"
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
