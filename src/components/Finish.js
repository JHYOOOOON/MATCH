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

const getDate = () => {
  let nowDate = "";
  const date = new Date();
  nowDate += date.getFullYear() + ". ";
  nowDate +=
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : date.getMonth() + 1 + ". ";
  nowDate += date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  return nowDate;
};

const Finish = (props) => {
  const {
    match: {
      params: { time },
    },
  } = props;

  let formattedTime = caculateTime(Number(time));

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.childNodes[0];
    const button = e.target.childNodes[1];
    const name = input.value;

    let prevRank = JSON.parse(localStorage.getItem("rank"));
    if (prevRank === null) prevRank = [];
    let newRank = {};
    newRank.name = name;
    newRank.timer = formattedTime;
    newRank.time = getDate();
    prevRank.push(newRank);

    console.log(prevRank);
    const sortedRank = prevRank.sort((a, b) => {
      if (a.timer < b.timer) return -1;
      else if (a.timer > b.timer) return 1;
      else {
        if (a.time < b.time) return 1;
        else if (a.time >= b.time) return -1;
      }
    });

    localStorage.setItem("rank", JSON.stringify(sortedRank));
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
        <Link
          to={{
            pathname: "/game",
            state: {
              start_time: new Date().getTime(),
            },
          }}
        >
          Retry
        </Link>
      </button>
      <button className="homeBtn">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Finish;
