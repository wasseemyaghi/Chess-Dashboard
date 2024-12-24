import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
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
        <div className="lastGame-rating">
          Rating:
          {props.isloading ? (
            lastGame ? (
              lastGame.rating
            ) : (
              0
            )
          ) : (
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={40} />
          )}
        </div>
      </div>
      <div className="content-card">
        <div className="content-card-one"></div>
        <div className="content-card-two"></div>
        {props.isloading ? (
          lastGame ? (
            <div className="content-card-three">
              {lastGame ? new Date(lastGame.date * 1000).toDateString() : 0}
            </div>
          ) : (
            <div className="content-card-three">0</div>
          )
        ) : (
          <Skeleton
            sx={{ borderRadius: "10px" }}
            variant="rectangular"
            width={55}
            height={55}
          />
        )}
        <div className="content-card-four"></div>
        <div className="content-card-five"></div>
      </div>
    </div>
  );
}
