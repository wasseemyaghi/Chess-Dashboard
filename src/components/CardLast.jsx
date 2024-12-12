import React, { useState, useEffect } from "react";
import "../styles/cardlast.css";
export default function CardLast(props) {
  const [lastGame, setLastGame] = useState();
  useEffect(() => {
    setLastGame(props.lastgame);
  }, [props.lastgame]);
  return (
    <div className="lastgame-card">
      <div className="lastgame-info">
        <div>Last Game</div>
        <div>Rating: {lastGame ? lastGame.rating : 0}</div>
      </div>
      <div className="content-card">
        <div className="content-card-one"></div>
        <div className="content-card-two"></div>
        <div className="content-card-three">
          {lastGame ? new Date(lastGame.date * 1000).toDateString() : 0}
        </div>
        <div className="content-card-four"></div>
        <div className="content-card-five"></div>
      </div>
    </div>
  );
}
