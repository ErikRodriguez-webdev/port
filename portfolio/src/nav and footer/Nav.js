import React from "react";
import { Link } from "react-scroll";
import "../App.css";

const Nav = () => {
  return (
    <div id="myNav">
      <nav>
        <Link
          activeClass="active"
          smooth
          duration={1000}
          spy={true}
          to="home"
          className="allLinks"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          smooth
          duration={1000}
          spy={true}
          to="work"
          title="Work"
          className="allLinks"
        >
          Work
        </Link>
        <Link
          activeClass="active"
          smooth
          duration={1000}
          spy={true}
          to="skill"
          title="Skill"
          className="allLinks"
        >
          Skill
        </Link>
        <Link
          activeClass="active"
          smooth
          duration={1000}
          spy={true}
          to="story"
          className="allLinks"
        >
          Story
        </Link>
        <Link
          activeClass="active"
          smooth
          duration={1000}
          spy={true}
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
