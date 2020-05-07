import React from "react";
import StoryIcon from "../img/file-icon.png";
import "../App.css";

const Story = () => {
  return (
    <section id="story">
      <div className="storyMainBox">
        <div className="cornerTag">
          <img src={StoryIcon} alt="book" />
          <h3>Story</h3>
        </div>

        <div className="storyContent">
          <p>Content</p>
        </div>
      </div>
    </section>
  );
};

export default Story;
