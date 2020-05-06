import React from "react";
import HomeIcon from "../img/home-icon.png";
import "../App.css";

const Home = () => {
  return (
    <section id="home">
      <div className="homeMainBox">
        <div className="cornerTag">
          <img src={HomeIcon} alt="home" />
          <h3>Home</h3>
        </div>
      </div>
    </section>
  );
};

export default Home;
