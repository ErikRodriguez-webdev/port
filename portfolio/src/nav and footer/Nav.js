import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <Link to="/">About Me</Link>
      <Link to="/work">Work</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/skill">Skill</Link>
    </header>
  );
};

export default Nav;
