import React, { useState } from "react";
import Icon10 from "../img/left-icon.png";
import Icon11 from "../img/right-icon.png";
import "../App.css";

const ImageDisplay = () => {
  //Images
  const images = [
    "https://i.postimg.cc/PxqmjkRq/myself-img.jpg",
    "https://i.postimg.cc/vmWjbRtN/bro-Mom-Family.jpg",
    "https://i.postimg.cc/YjKYpP3d/bros-Family.jpg",
    "https://i.postimg.cc/SNBDsTRF/erikArmy.jpg",
    "https://i.postimg.cc/rFNNV8BW/ring-Ling-Family.jpg",
    "https://i.postimg.cc/wvDsw2HJ/cool-Sneaker.jpg",
    "https://i.postimg.cc/yxVWvzL4/brother-Family.jpg",
    "https://i.postimg.cc/c4CLHhjm/james-Jean-Art.jpg",
    "https://i.postimg.cc/L5X2J4yX/hunterxhunter.jpg",
  ];

  //Counter
  const [counter, setCounter] = useState(0);

  //Cycle through images
  const forward = () => {
    return counter === images.length - 1
      ? setCounter(0)
      : setCounter(counter + 1);
  };

  const back = () => {
    return counter === 0
      ? setCounter(images.length - 1)
      : setCounter(counter - 1);
  };

  return (
    <div className="imageFrame">
      <div className="imageNav">
        <div onClick={() => back()} title="Back" className="arrowNav">
          <img src={Icon10} alt="left arrow symbol" />
        </div>
        <p>{`${counter + 1}/${images.length}`}</p>
        <div onClick={() => forward()} title="Forward" className="arrowNav">
          <img src={Icon11} alt="right arrow symbol" />
        </div>
      </div>
      <img
        src={images[counter]}
        alt="An Album About Family and Interests"
        className="slideShowImages"
      />
    </div>
  );
};

export default ImageDisplay;
