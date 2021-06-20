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

  SwiperCore.use([Navigation, Pagination]);

  const slides = [];

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
    // <div className="workGrid" onClick={() => closerlook(props.data)}>
    //   <h4>{props.data.title}</h4>
    //   <div className="workGridImage">
    //     <img src={props.data.image} alt="desktop screen capture" />
    //   </div>
    // </div>
  );
};

export default WorkGrid;
