import React, { useEffect, useState } from "react";
import tournamentsvg from "../assets/img/tournamentsvg.svg";
import "../styles/cardtournament.css";
export default function CardTournament(props) {
  const [Tournament, setTournament] = useState(null);
  useEffect(() => {
    setTournament(props.tournament);
  }, [props.tournament]);
  return (
    <>
      <div className="tournament-section">
        <div className="tournament-title">Tournament</div>
        <div className="tournament-image">
          <img src={tournamentsvg} alt="tournamentsvg" />
        </div>
        <div className="tournament-count">
          Count: {Tournament ? Tournament.points : 0}
        </div>
        <div className="tournament-draw">
          Withdraw: {Tournament ? Tournament.withdraw : 0}
        </div>
        <div className="tournament-point">
          Points: {Tournament ? Tournament.count : 0}
        </div>
      </div>
    </>
  );
}
