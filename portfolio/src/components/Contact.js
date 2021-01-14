import React from "react";
import { Link } from "react-scroll";
import ContactIcon from "../img/phone-icon.png";
import EmailIcon from "../img/email-icon.png";
import LinkedInIcon from "../img/linkedin-logo.png";
import GithubIcon from "../img/github-logo.png";
import LeetcodeIcon from "../img/leetcode-icon.png";
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
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=perhapserik@gmail.com&su=Hey+Erik+let%27s+link+up&tf=1"
            target="_blank"
            rel="noopener noreferrer"
            className="contactInfoPlacement"
          >
            <div className="contactIcon">
              <img src={EmailIcon} alt="envelope logo" />
            </div>
            <div className="contactTextStack">
              <span className="contactTextTitle">Email:</span>
              <br />
              <span className="contactTextInfo">perhapserik@gmail.com</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/erikrodriguez-webdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="contactInfoPlacement"
          >
            <div className="contactIcon">
              <img src={LinkedInIcon} alt="linkedin logo" />
            </div>
            <div className="contactTextStack">
              <span className="contactTextTitle">LinkedIn:</span>
              <br />
              <span className="contactTextInfo">
                linkedin.com/in/erikrodriguez-webdev/
              </span>
            </div>
          </a>

          <a
            href="https://github.com/ErikRodriguez-webdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="contactInfoPlacement"
          >
            <div className="contactIcon">
              <img src={GithubIcon} alt="github logo" />
            </div>
            <div className="contactTextStack">
              <span className="contactTextTitle">Github:</span>
              <br />
              <span className="contactTextInfo">
                github.com/ErikRodriguez-webdev/
              </span>
            </div>
          </a>

          <a
            href="https://leetcode.com/ErikRodriguez-webdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="contactInfoPlacement"
          >
            <div className="contactIcon">
              <img src={LeetcodeIcon} alt="leetcode logo" />
            </div>
            <div className="contactTextStack">
              <span className="contactTextTitle">Leetcode:</span>
              <br />
              <span className="contactTextInfo">
                leetcode.com/erikrodriguez-webdev/
              </span>
            </div>
          </a>

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
