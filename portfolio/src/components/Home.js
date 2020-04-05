import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <div className="homeMainBox">
        <h1>Hello and Welcome to My Port.</h1>
        <button onClick={() => history.push("/about")}>
          CLICK HERE TO CONTINUE
        </button>
        <p>(WORK IN PROGRESS STILL UNDER CONSTRUCTION)</p>
      </div>
    </>
  );
};

export default Home;
