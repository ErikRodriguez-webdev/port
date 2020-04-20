import React from "react";
import { useSpring, animated } from "react-spring";
import "../App.css";

const MovingBG = () => {
  //Box Script Animation
  const props = useSpring({
    from: {
      left: "50%",
      top: "50%",
      width: "0%",
      height: "0%",
      background: "lightgreen",
    },
    to: async (next) => {
      while (1) {
        await next({
          left: "0%",
          top: "0%",
          width: "100%",
          height: "100%",
          background: "lightblue",
        });
        await next({ height: "33.3%", background: "lightgreen" });
        await next({ top: "33.3%", height: "33.3%", background: "lightgreen" });
        await next({ top: "66.6%", height: "33.3%", background: "lightgreen" });
        await next({
          width: "33.3%",
          left: "66.6%",
          background: "lightgoldenrodyellow",
        });
        await next({ top: "0%", height: "100%", background: "lightpink" });
        await next({
          width: "33.3%",
          left: "33.3%",
          background: "lightpink",
        });
        await next({
          width: "33.3%",
          left: "0%",
          background: "lightpink",
        });
        await next({
          width: "33.3%",
          height: "33.3%",
          background: "lightsalmon",
        });

        await next({
          width: "66.6%",
          height: "33.3%",
          background: "lightskyblue",
        });
        await next({
          width: "33.3%",
          left: "33.3%",
          background: "lightslategrey",
        });
        await next({
          width: "33.3%",
          left: "33.3%",
          height: "100%",
          background: "lightyellow",
        });
      }
    },
  });

  return (
    <>
      <animated.div className="backgroundBox" style={props} />
    </>
  );
};

export default MovingBG;
