import React from "react";

const Nav = () => {
  return (
    <div id="myNav">
      <nav>
        <a href="#home" className="allLinks">
          Home
        </a>
        <a href="#work" title="Work" className="allLinks">
          Work
        </a>
        <a href="#skill" title="Skill" className="allLinks">
          Skill
        </a>
        <a href="#story" className="allLinks">
          Story
        </a>
        <a href="#contact" title="Contact" className="allLinks">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Nav;
