import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import "./Rank.scss";

const handleRefreshClick = (e) => {
  localStorage.removeItem("rank");
  window.location.reload(false);
};

const Rank = () => {
  let rankArray = JSON.parse(localStorage.getItem("rank"));
  // console.log(rankArray);
  return (
    <div className="rank">
      <div className="rank-flex">
        <p>Rank</p>
        <button onClick={handleRefreshClick}>
          <FiRefreshCcw />
        </button>
      </div>
      <div className="rank-container">
        <div className="rank-item rank-head">
          <p className="rank-num">Rank</p>
          <p className="rank-name">Name</p>
          <p className="rank-record">Record</p>
          <p className="rank-time">Date</p>
        </div>
        {rankArray !== null ? (
          rankArray.map((rank, i) => {
            return (
              <div className={`rank-item ${i}`} key={i}>
                <p className="rank-num">{i + 1}</p>
                <p className="rank-name">{rank.name}</p>
                <p className="rank-record">{rank.timer}</p>
                <p className="rank-time">{rank.time}</p>
              </div>
            );
          })
        ) : (
          <div className="rank-empty">Empty🤔</div>
        )}
      </div>
    </div>
  );
};

export default Rank;
