import React from "react";
import { Link } from "react-scroll";
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
            <div className="contactTextStack">
              <span className="contactTextTitle">Email:</span>
              <br />
              <span className="contactTextInfo">perhapserik@gmail.com</span>
            </div>
          </div>

          <div className="contactInfoPlacement">
            <div className="contactIcon">
              <img src={LinkedInIcon} alt="envelope" />
            </div>
            <div className="contactTextStack">
              <span className="contactTextTitle">LinkedIn:</span>
              <br />
              <span className="contactTextInfo">
                linkedin.com/in/erik-rodriguez-617aa419a/
              </span>
            </div>
          </div>

          <div className="contactInfoPlacement">
            <div className="contactIcon">
              <img src={GithubIcon} alt="envelope" />
            </div>
            <div className="contactTextStack">
              <span className="contactTextTitle">Github:</span>
              <br />
              <span className="contactTextInfo">
                github.com/ErikRodriguez-webdev/
              </span>
            </div>
          </div>

          <div className="contactInfoPlacement">
            <div className="contactIcon">
              <img src={null} alt="envelope" />
            </div>
            <div className="contactTextStack">
              <span className="contactTextTitle">google:</span>
              <br />
              <span className="contactTextInfo">
                google.com
              </span>
            </div>
          </div>

          <div className="contactTopBtn">
            <Link smooth duration={1000} to="home">
              Back to Top
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
