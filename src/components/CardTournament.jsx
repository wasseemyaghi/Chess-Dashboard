import React, { useEffect, useState } from "react";

import Skeleton from "@mui/material/Skeleton";

import "../styles/cardtournament.css";
import tournamentsvg from "../assets/img/tournamentsvg.svg";

export default function CardTournament(props) {
  const [tournamentData, setTournamentData] = useState(null);
  const { tournament, isloading } = props;

  useEffect(() => {
    setTournamentData(tournament);
  }, [tournament]);

  return (
    <>
      <div className="tournament-section">
        <div className="tournament-title">Tournament</div>
        <div className="tournament-image">
          <img src={tournamentsvg} alt="tournamentsvg" />
        </div>
        {isloading ? (
          <div className="tournament-count">
            Count: {tournamentData?.points || 0}
          </div>
        ) : (
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem", backgroundColor: "gray" }}
            width={70}
            height={30}
          />
        )}
        {isloading ? (
          <div className="tournament-draw">
            Withdraw: {tournamentData?.withdraw || 0}
          </div>
        ) : (
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem", backgroundColor: "gray" }}
            width={70}
            height={30}
          />
        )}
        {isloading ? (
          <div className="tournament-point">
            Points: {tournamentData?.count || 0}
          </div>
        ) : (
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem", backgroundColor: "gray" }}
            width={70}
            height={30}
          />
        )}
      </div>
    </>
  );
}
