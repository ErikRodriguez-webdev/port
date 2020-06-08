import React from "react";
import { Link } from "react-scroll";
import "../App.css";

const Nav = () => {
  return (
    <div id="myNav">
      <nav>
        <Link smooth duration={1000} to="home" className="allLinks">
          Home
        </Link>
        <Link
          smooth
          duration={1000}
          to="work"
          title="Work"
          className="allLinks"
        >
          Work
        </Link>
        <Link
          smooth
          duration={1000}
          to="skill"
          title="Skill"
          className="allLinks"
        >
          Skill
        </Link>
        <Link smooth duration={1000} to="story" className="allLinks">
          Story
        </Link>
        <Link
          smooth
          duration={1000}
          to="contact"
          title="Contact"
          className="allLinks"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
