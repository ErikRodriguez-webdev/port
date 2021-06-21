import React, { useState } from "react";
import { storyData } from "../utils/StoryData";
// import LeftIcon from "../img/left-icon.png";
// import RightIcon from "../img/right-icon.png";
import StoryIcon from "../img/file-icon.png";
// import Fade from "react-reveal/Fade";
import "../App.css";

// swiper slider component
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Nav from "../nav and footer/Nav";

const Story = () => {
  // const data = storyData;
  // const [counter, setCounter] = useState(0);
  // const [fadeIn, setFadeIn] = useState(true);

  // const forward = () => {
  //   setFadeIn(false);
  //   setTimeout(() => {
  //     setFadeIn(true);
  //   }, 100);

  //   if (counter >= data.length - 1) {
  //     setCounter(0);
  //   } else {
  //     setCounter(counter + 1);
  //   }
  // };

  // const back = () => {
  //   setFadeIn(false);
  //   setTimeout(() => {
  //     setFadeIn(true);
  //   }, 100);

  //   if (counter <= 0) {
  //     setCounter(data.length - 1);
  //   } else {
  //     setCounter(counter - 1);
  //   }
  // };

  const slides = [];

  SwiperCore.use([Pagination, Navigation]);

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
          <div className="storyCard">
            <Swiper pagination={{ type: "progressbar" }} navigation loop>
              {slides}
            </Swiper>

            {/* <div> */}
            {/* <button className="storyNavBtn" onClick={back}>
                <img src={LeftIcon} alt="left chevron" />
              </button> */}
            {/* </div> */}

            {/* <div className="storyCenter"> */}
            {/* <Fade when={fadeIn}> */}
            {/* <p>{`${counter + 1}/${data.length}`}</p> */}
            {/* <div className="storyImage"> */}
            {/* <img src={data[counter].img} alt="a digital story album" /> */}
            {/* </div> */}
            {/* <p>{data[counter].text}</p> */}
            {/* </Fade> */}
            {/* </div> */}

            {/* <div> */}
            {/* <button className="storyNavBtn" onClick={forward}>
                <img src={RightIcon} alt="left chevron" />
              </button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
