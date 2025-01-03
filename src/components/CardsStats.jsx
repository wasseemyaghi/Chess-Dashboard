import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardRecords from "./CardRecords";
import BestRatingCard from "./BestRatingCard";
import LastGameCard from "./LastGameCard";
import CardTournament from "./CardTournament";
import FilterCards from "./FilterCards";

import "../styles/cardstats.css";

export default function CardsStats() {
  const { username } = useParams();
  const [usernamestats, setusernamestats] = useState();
  const [currentGame, setCurrentGame] = useState("");
  const [currentRecords, setCurrentRecords] = useState(null);
  const [currentlastgame, setcurrentlastgame] = useState(null);
  const [currentBestgame, setcurrentBestgame] = useState(null);
  const [tournament, setTournament] = useState(null);
  const [isloading, setisloading] = useState(false);

  const fetchStatsData = () => {
    setisloading(false);
    fetch(`https://api.chess.com/pub/player/${username}/stats`)
      .then((response) => response.json())
      .then((data) => {
        setusernamestats(data);
        const firstGame = Object.keys(data)[0];
        if (firstGame) {
          setCurrentGame(firstGame);
          fetchGameStats(firstGame, data);
        }
        setisloading(true);
      })
      .catch((error) => console.error("Error fetching stats:", error));
  };

  const fetchGameStats = (game, stats) => {
    setCurrentRecords(stats[game]?.record || null);
    setcurrentlastgame(stats[game]?.last || null);
    setcurrentBestgame(stats[game]?.best || null);
    setTournament(stats[game]?.tournament || null);
  };

  const statsGameChange = (game) => {
    setisloading(false);
    setCurrentGame(game);
    setTimeout(() => {
      fetchGameStats(game, usernamestats);
      setisloading(true);
    }, 500);
  };

  useEffect(() => {
    fetchStatsData();
  }, [username]);

  return (
    <>
      <FilterCards
        gamename={usernamestats}
        currentGame={currentGame}
        onGameChange={statsGameChange}
      />
      <div className="cardstatsflex">
        <CardRecords statsrecords={currentRecords} isloading={isloading} />
        <div>
          <LastGameCard lastgame={currentlastgame} isloading={isloading} />
          <BestRatingCard bestgame={currentBestgame} isloading={isloading} />
        </div>
        <CardTournament tournament={tournament} isloading={isloading} />
      </div>
    </>
  );
}
