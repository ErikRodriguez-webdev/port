import React from "react";
import { NavLink } from "react-router-dom";
import Icon0 from "../img/home-icon.png";
import Icon1 from "../img/user-icon.png";
import Icon2 from "../img/folder-icon.png";
import Icon3 from "../img/file-icon.png";
import Icon4 from "../img/visible-icon.png";
import Icon5 from "../img/email-icon.png";

const Nav = () => {
  return (
    <header>
      <NavLink exact to="/" title="Home" className="allNavLinks">
        <img src={Icon0} alt="home icon" />
      </NavLink>
      <NavLink exact to="/about" title="About" className="allNavLinks">
        <img src={Icon1} alt="user icon" />
      </NavLink>
      <NavLink to="/work" title="Work" className="allNavLinks">
        <img src={Icon2} alt="briefcase icon" />
      </NavLink>
      <NavLink to="/resume" title="Resume" className="allNavLinks">
        <img src={Icon3} alt="file icon" />
      </NavLink>
      <NavLink to="/skill" title="Skill" className="allNavLinks">
        <img src={Icon4} alt="eye icon" />
      </NavLink>
      <NavLink to="/contact" title="Contact" className="allNavLinks">
        <img src={Icon5} alt="mail icon" />
      </NavLink>
    </header>
  );
};

export default Nav;
