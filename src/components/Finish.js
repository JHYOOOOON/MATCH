import React from "react";
import "./Finish.scss";
import { Link } from "react-router-dom";

const caculateTime = (time) => {
  let timeArray = [];
  for (let i = 0; i < 3; i++) {
    timeArray.push(Math.floor(time % 60));
    time /= 60;
  }

  let formattedTime = "";
  formattedTime += timeArray[2] < 10 ? `0${timeArray[2]}` : timeArray[2];
  formattedTime += ":";
  formattedTime += timeArray[1] < 10 ? `0${timeArray[1]}` : timeArray[1];
  formattedTime += ":";
  formattedTime += timeArray[0] < 10 ? `0${timeArray[0]}` : timeArray[0];
  return formattedTime;
};

const Finish = (props) => {
  const {
    match: {
      params: { time },
    },
  } = props;

  let formattedTime = caculateTime(Number(time));

  const handleSubmit = (e) => {
    const input = e.target.childNodes[0];
    const button = e.target.childNodes[1];
    const name = input.value;

    let prevRank = JSON.parse(localStorage.getItem("rank"));
    if (prevRank === null) prevRank = [];
    let newRank = {};
    newRank[name] = formattedTime;
    prevRank.push(newRank);

    localStorage.setItem("rank", JSON.stringify(prevRank));
    input.value = "";
    input.disabled = true;
    input.placeholder = "Submitted";
    button.type = "button";
  };

  return (
    <div className="finish-container">
      <p className="congrats">Congratulations!</p>
      <p className="time">{formattedTime}</p>
      <form className="save-container" onSubmit={handleSubmit}>
        <input type="text" placeholder="Write your name" />
        <button type="submit">Save</button>
      </form>
      <button className="retryBtn">
        <Link to="/game">Retry</Link>
      </button>
      <button className="homeBtn">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Finish;
