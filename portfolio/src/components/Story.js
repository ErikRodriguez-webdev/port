import React, { useState } from "react";
import { storyData } from "../utils/StoryData";
import LeftIcon from "../img/left-icon.png";
import RightIcon from "../img/right-icon.png";
import StoryIcon from "../img/file-icon.png";
// import TwinImage from "../img/broAndI.JPG";
import "../App.css";

const Story = () => {
  const data = storyData;
  const [counter, setCounter] = useState(0);

  const forward = () => {
    if (counter >= 4) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const back = () => {
    if (counter <= 0) {
      setCounter(4);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <section id="story">
      <div className="storyMainBox">
        <div className="cornerTag">
          <img src={StoryIcon} alt="book" />
          <h3>Story</h3>
        </div>

        <div className="storyContent">
          <div className="storyCard">
            {counter !== 0 ? (
              <div className="storyNavBtn" onClick={back}>
                <img src={LeftIcon} alt="left chevron" />
              </div>
            ) : null}

            <div className="storyCenter">
              <p>{`${counter + 1}/${data.length}`}</p>
              <div className="storyImage">
                <img src={data[counter].img} alt="a digital story album" />
              </div>
              <p>{data[counter].text}</p>
            </div>

            {counter !== 2 ? (
              <div className="storyNavBtn" onClick={forward}>
                <img src={RightIcon} alt="left chevron" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
