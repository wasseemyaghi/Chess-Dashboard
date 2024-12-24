import "../styles/cardrecords.css";
import Skeleton from "@mui/material/Skeleton";
import React, { useState, useEffect } from "react";

export default function Card(props) {
  const [statsrecords, setstatsrecords] = useState();
  const [totalGames, setTotalGames] = useState(0);
  const [wonGames, setWonGames] = useState(0);

  useEffect(() => {
    if (props.statsrecords) {
      setstatsrecords(props.statsrecords);
      const total =
        props.statsrecords.win +
        props.statsrecords.loss +
        props.statsrecords.draw;
      setTotalGames(total);
      setWonGames(props.statsrecords.win);
    } else {
      setstatsrecords(null);
      setTotalGames(0);
      setWonGames(0);
    }
  }, [props.statsrecords]);

  const radius = 15.91549431;
  const circumference = 2 * Math.PI * radius;
  const percentage = (wonGames / totalGames) * 100;

  return (
    <div className="records-card">
      <div className="records-card-title">Records</div>
      <div className="records-card-timetext">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 9C16.5 13.14 13.14 16.5 9 16.5C4.86 16.5 1.5 13.14 1.5 9C1.5 4.86 4.86 1.5 9 1.5C13.14 1.5 16.5 4.86 16.5 9Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.7825 11.3849L9.45753 9.99745C9.05253 9.75745 8.72253 9.17995 8.72253 8.70745V5.63245"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Time per move:{" "}
        {props.isloading ? (
          statsrecords && statsrecords.time_per_move ? (
            statsrecords.time_per_move
          ) : (
            "-"
          )
        ) : (
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={80} />
        )}
      </div>
      <div className="records-card-timeout">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.75 1.5H11.25C15 1.5 16.5 3 16.5 6.75V11.25C16.5 15 15 16.5 11.25 16.5H6.75C3 16.5 1.5 15 1.5 11.25V6.75C1.5 3 3 1.5 6.75 1.5Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.42749 11.4525L11.3325 6.54749"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.73501 7.77749C7.24449 7.77749 7.65749 7.36449 7.65749 6.855C7.65749 6.34552 7.24449 5.9325 6.73501 5.9325C6.22553 5.9325 5.8125 6.34552 5.8125 6.855C5.8125 7.36449 6.22553 7.77749 6.73501 7.77749Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.64 12.0675C12.1495 12.0675 12.5625 11.6545 12.5625 11.145C12.5625 10.6355 12.1495 10.2225 11.64 10.2225C11.1305 10.2225 10.7175 10.6355 10.7175 11.145C10.7175 11.6545 11.1305 12.0675 11.64 12.0675Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Timeout Percentage:{" "}
        {props.isloading ? (
          statsrecords && statsrecords.timeout_percent ? (
            statsrecords.timeout_percent
          ) : (
            "-"
          )
        ) : (
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={80} />
        )}
      </div>
      <div className="pourcentage-win">
        {props.isloading ? (
          <div className="circle">
            <svg
              key={percentage}
              className="circle-chart"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                "--percentage": `${percentage}px`,
                "--circumference": `${circumference}px`,
              }}
            >
              <circle
                className="circle-chart__background"
                stroke="#efefef"
                strokeWidth="3.5"
                fill="none"
                cx="18"
                cy="18"
                r="16"
              />
              <circle
                className="circle-chart__circle"
                stroke="#FFC61A"
                strokeWidth="3.5"
                strokeDasharray={`${percentage} ${circumference}`}
                strokeLinecap="round"
                fill="none"
                cx="18"
                cy="18"
                r="16"
              />
            </svg>
            <div className="textincircle">{totalGames} Games</div>
          </div>
        ) : (
          <Skeleton variant="circular" width={140} height={140} />
        )}
        <div className="numberonleft">
          <div className="number-win">
            <div className="circle-win"></div>
            {props.isloading ? (
              <div className="text-win">
                {statsrecords ? statsrecords.win : 0} Win
              </div>
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={80} />
            )}
          </div>
          <div className="number-lose">
            <div className="circle-lose"></div>
            {props.isloading ? (
              <div className="text-lose">
                {statsrecords ? statsrecords.loss : 0} Loss
              </div>
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={80} />
            )}
          </div>
          <div className="number-draw">
            <div className="circle-draw"></div>
            {props.isloading ? (
              <div className="text-draw">
                {statsrecords ? statsrecords.draw : 0} Withdraw
              </div>
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={80} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
