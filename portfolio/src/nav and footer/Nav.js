import React from "react";
import { NavLink } from "react-router-dom";
import Icon1 from "../img/user-icon.png";
import Icon2 from "../img/briefcase-icon.png";
import Icon3 from "../img/file-icon.png";
import Icon4 from "../img/visible-icon.png";
import Icon5 from "../img/email-icon.png";

const Nav = () => {
  return (
    <header>
      <NavLink exact to="/" className="allNavLinks">
        <img src={Icon1} alt="user icon" title="About Me" />
      </NavLink>
      <NavLink to="/work" className="allNavLinks">
        <img src={Icon2} alt="briefcase icon" title="Work" />
      </NavLink>
      <NavLink to="/resume" className="allNavLinks">
        <img src={Icon3} alt="file icon" title="Resume" />
      </NavLink>
      <NavLink to="/skill" className="allNavLinks">
        <img src={Icon4} alt="eye icon" title="Skill" />
      </NavLink>
      <NavLink to="/contact" className="allNavLinks">
        <img src={Icon5} alt="mail icon" title="Contact" />
      </NavLink>
    </header>
  );
};

export default Nav;
