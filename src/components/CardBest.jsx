import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
import "../styles/cardbest.css";

export default function CardBest(props) {
  const [BestGame, setBestGame] = useState();
  useEffect(() => {
    setBestGame(props.bestgame);
  }, [props.bestgame]);
  return (
    <div className="bestgame-card">
      <div className="bestgame-info">
        <div>Best Rating</div>
        <div>
          {BestGame && (
            <Link to={`${BestGame.game}`} className="bestgameinfo-right">
              <div>Go to Game</div>
              <div>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.41675 4.58341L8.83341 1.16675"
                    stroke="#303030"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.16675 2.83337V0.833374H7.16675"
                    stroke="#303030"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.58325 0.833374H3.74992C1.66659 0.833374 0.833252 1.66671 0.833252 3.75004V6.25004C0.833252 8.33337 1.66659 9.16671 3.74992 9.16671H6.24992C8.33325 9.16671 9.16659 8.33337 9.16659 6.25004V5.41671"
                    stroke="#303030"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className="content-card-bestgame">
        <div className="content-bestgame"></div>
        <div className="content-bestgame"></div>
        {props.isloading ? (
          BestGame ? (
            <div className="content-card-bestgamethree">
              {BestGame?.date
                ? new Date(BestGame.date * 1000).toDateString()
                : 0}
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
        <div className="content-bestgame"></div>
        <div className="content-bestgame"></div>
      </div>
      <div className="lastcontent-bestgame">
        <div className="bestrating">Best Rating 🎉</div>
        <div className="bestgame-rating">
          Rating:
          {props.isloading ? (
            BestGame?.rating || "0"
          ) : (
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={40} />
          )}
        </div>
      </div>
    </div>
  );
}
