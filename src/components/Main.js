import React from "react";
import "./Main.scss";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <p className="title">MATCH!</p>
      <p className="description">
        Welcome! <br />
        Enjoy card matching game!
      </p>
      <button className="play">
        <Link to="/game">Play</Link>
      </button>
      <button>
        <Link to="/rank">Rank</Link>
      </button>
    </div>
  );
};

export default Main;
