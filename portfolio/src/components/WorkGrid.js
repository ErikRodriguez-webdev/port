import React from "react";
import { workData } from "../utils/WorkData.js";
import { useHistory } from "react-router-dom";
import "../App.css";

// swiper sliding component
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const WorkGrid = () => {
  const history = useHistory();

  const closerlook = (obj) => {
    history.push(`/work/${obj.title}`, obj);

    if (window.scrollY !== 0) {
      window.scroll(0, 0);
    }
  };

  // Added functionality to swiper slide default
  SwiperCore.use([Navigation, Pagination]);

  const slides = [];

  // Create a slide for each object in workdata structure
  workData.map((slide) => {
    slides.push(
      <SwiperSlide key={slide.id}>
        <img
          src={slide.image}
          alt="desktop screen capture"
          className="slideImg"
        />
        <div className="slideBtn" onClick={() => closerlook(slide)}>
          {slide.title}
        </div>
      </SwiperSlide>
    );
  });

  // change swiper default color
  document.documentElement.style.setProperty("--swiper-theme-color", "#ffffff");

  return (
    <Swiper slidesPerView={1} navigation pagination loop>
      {slides}
    </Swiper>
  );
};

export default WorkGrid;
