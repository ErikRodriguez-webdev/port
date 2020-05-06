import React from "react";
import ContactIcon from "../img/email-icon.png";
import "../App.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contactMainBox">
        <div className="cornerTag">
          <img src={ContactIcon} alt="phone" />
          <h3>Contact</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
