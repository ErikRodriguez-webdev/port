import React from "react";
import { storyData } from "../utils/StoryData";
import StoryIcon from "../img/file-icon.png";
// import Fade from "react-reveal/Fade";
import "../App.css";

// swiper slider component
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Story = () => {
  const slides = [];

  // added extra functionality to swiper slide defaults
  SwiperCore.use([Pagination, Navigation]);

  // creates slide for each obj in storydata structure
  storyData.map((slide) => {
    slides.push(
      <SwiperSlide key={slide.id}>
        <img src={slide.img} alt="digital story album" />
        <p className="storyText">{slide.text}</p>
      </SwiperSlide>
    );
  });

  return (
    <section id="story">
      <div className="storyMainBox">
        <div className="cornerTag">
          <img src={StoryIcon} alt="book" />
          <h3>Story</h3>
        </div>

        <div className="storyContent">
          <Swiper pagination={{ type: "progressbar" }} navigation loop>
            {slides}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Story;
