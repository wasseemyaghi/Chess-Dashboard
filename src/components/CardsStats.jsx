import React, { useEffect, useState } from "react";
import CardRecords from "../components/CardRecords";
import CardBest from "./CardBest";
import CardLast from "./CardLast";
import CardTournament from "./CardTournament";
import FilterCards from "./FilterCards";
import { useParams } from "react-router-dom";
import "../styles/cardstats.css";
export default function CardsStats() {
  const { username } = useParams();
  const [usernamestats, setusernamestats] = useState();
  const [currentGame, setCurrentGame] = useState("");
  const [currentRecords, setCurrentRecords] = useState(null);
  const [currentlastgame, setcurrentlastgame] = useState(null);
  const [currentBestgame, setcurrentBestgame] = useState(null);
  const [Tournament, setTournament] = useState(null);

  const fetchStatsData = () => {
    fetch(`https://api.chess.com/pub/player/${username}/stats`)
      .then((response) => response.json())
      .then((data) => {
        setusernamestats(data);
        const firstGame = Object.keys(data)[0];
        if (firstGame) {
          setCurrentGame(firstGame);
          fetchGameStats(firstGame, data);
        }
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
    setCurrentGame(game);
    fetchGameStats(game, usernamestats);
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
        <CardRecords statsrecords={currentRecords} />
        <div>
          <CardLast lastgame={currentlastgame} />
          <CardBest bestgame={currentBestgame} />
        </div>
        <CardTournament tournament={Tournament} />
      </div>
    </>
  );
}
