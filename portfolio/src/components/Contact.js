import React from "react";
import ContactIcon from "../img/phone-icon.png";
import EmailIcon from "../img/email-icon.png";
import LinkedInIcon from "../img/linkedin-logo.png";
import GithubIcon from "../img/github-logo.png";
import "../App.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contactMainBox">
        <div className="cornerTag">
          <img src={ContactIcon} alt="phone" />
          <h3>Contact</h3>
        </div>

        <div className="contactContent">
          <div className="contactInfoPlacement">
            <div className="contactIcon">
              <img src={EmailIcon} alt="envelope" />
            </div>
            <p>Email: eric19.21.03@gmail.com</p>
          </div>

          <div className="contactInfoPlacement">
            <div className="contactIcon">
              <img src={LinkedInIcon} alt="envelope" />
            </div>
            <p>LinkedIn: linkedin.com/in/erik-rodriguez-617aa419a/</p>
          </div>

          <div className="contactInfoPlacement">
            <div className="contactIcon">
              <img src={GithubIcon} alt="envelope" />
            </div>
            <p>Github: github.com/ErikRodriguez-webdev</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
