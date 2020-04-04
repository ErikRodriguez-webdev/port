import React, { useState } from "react";
import "../App.css";

const ImageDisplay = () => {
  //Counter
  const [index, setIndex] = useState(0);

  const timer = (numIndex) => {
    if (numIndex === 7) {
      return setIndex(0);
    } else {
      setIndex(numIndex + 1);
    }
  };

  //Images
  const imageData = [
    "https://i.postimg.cc/vmWjbRtN/bro-Mom-Family.jpg",
    "https://i.postimg.cc/YjKYpP3d/bros-Family.jpg",
    "https://i.postimg.cc/SNBDsTRF/erikArmy.jpg",
    "https://i.postimg.cc/rFNNV8BW/ring-Ling-Family.jpg",
    "https://i.postimg.cc/wvDsw2HJ/cool-Sneaker.jpg",
    "https://i.postimg.cc/yxVWvzL4/brother-Family.jpg",
    "https://i.postimg.cc/c4CLHhjm/james-Jean-Art.jpg",
    "https://i.postimg.cc/L5X2J4yX/hunterxhunter.jpg",
  ];

  //Cycle through and Timeout
  setTimeout(() => {
    timer(index);
  }, 3500);

  return (
    <div className="imageFrame">
      <img
        src={imageData[index]}
        alt="An Album About Family and Interests"
        className="slideShowImages"
      />
    </div>
  );
};

export default ImageDisplay;
