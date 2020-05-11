import React from "react";
import StoryIcon from "../img/file-icon.png";
import TwinImage from "../img/broAndI.JPG";
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
          <div className="storyText">
            <p>
              It all began when my brother introduced me to shoes and clothing.
              With this new hobby my brother and I teamed up to start flipping
              these highly limited and extremely demanded sneakers and clothing
              pieces. When everyone in the world and their mother is trying to
              purchase a high ticket item to flip you need any advantage you can
              get. Advantages can be potential links that can lead you to the
              item drop, list of all retailers dropping to plan out order of
              releases to hit, and the best advantage to give yourself is using
              automated checkout software.
              <br />
              <br />
              In the resell industry you call automated checkout software, bots.
              Bots can give you a huge advantage to not only secure a single
              high ticket item, but have hundreds of tasks running trying to
              checkout and purchase with payment. This led my brother and I to
              try our luck and learn how to operate one of these bots, so we
              saved up enough money and bought one. Since there was only one bot
              my brother decided that he could man the bot and I could manually
              try going for the items dropping during the learning stages.
            </p>
          </div>

          <div className="storyImg">
            <img src={TwinImage} alt="My Brother and I " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
