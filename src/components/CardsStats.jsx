import React, { useEffect, useState } from "react";
import CardRecords from "../components/CardRecords";
import FilterCards from "./FilterCards";
import { useParams } from "react-router-dom";
export default function CardsStats() {
  const { username } = useParams();
  const [usernamestats, setusernamestats] = useState();
  const [currentGame, setCurrentGame] = useState("");
  const [currentStats, setCurrentStats] = useState(null);

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
    setCurrentStats(stats[game]?.record || null);
    console.log(stats[game]?.record);
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
      <CardRecords statsrecords={currentStats} />
    </>
  );
}
