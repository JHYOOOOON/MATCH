import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <p className="title">MATCH!</p>
      <p className="description">
        Welcome! <br />
        Enjoy card matching game!
      </p>
      <button className="play">Play</button>
      <button>Rank</button>
    </div>
  );
};

export default Main;
