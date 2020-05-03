import React from "react";
import Icon0 from "../img/home-icon.png";
import Icon1 from "../img/user-icon.png";
import Icon2 from "../img/folder-icon.png";
import Icon3 from "../img/file-icon.png";
import Icon4 from "../img/visible-icon.png";
import Icon5 from "../img/email-icon.png";

const Nav = () => {
  return (
    <div id="myNav">
      <nav>
        <a href="#home" title="Home" className="allLinks">
          <img src={Icon0} alt="home icon" />
        </a>
        <a href="#about" title="About" className="allLinks">
          <img src={Icon1} alt="user icon" />
        </a>
        <a href="#work" title="Work" className="allLinks">
          <img src={Icon2} alt="briefcase icon" />
        </a>
        <a href="#resume" title="Resume" className="allLinks">
          <img src={Icon3} alt="file icon" />
        </a>
        <a href="#skill" title="Skill" className="allLinks">
          <img src={Icon4} alt="eye icon" />
        </a>
        <a href="#contact" title="Contact" className="allLinks">
          <img src={Icon5} alt="mail icon" />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
