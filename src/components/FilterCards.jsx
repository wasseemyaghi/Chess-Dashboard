import React, { useState, useEffect } from "react";
import "../styles/filtercards.css";

export default function FilterCards(props) {
  const [keynamegame, setkeynamegame] = useState();
  const { gamename, onGameChange, currentGame } = props;
  useEffect(() => {
    if (gamename) {
      setkeynamegame(Object.keys(gamename));
    }
  }, [gamename]);
  const handlegameChange = (e) => {
    onGameChange(e.target.value);
  };

  return (
    <>
      <div className="filterBygame">
        <div className="nameofgame">
          {currentGame
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </div>
        <div className="selectgame-filter">
          <select value={currentGame} onChange={handlegameChange}>
            {keynamegame &&
              keynamegame.map((keyname, index) => {
                return (
                  <option key={index} value={keyname}>
                    {keyname}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    </>
  );
}
