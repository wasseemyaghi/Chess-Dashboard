import React from "react";
import { useState, useEffect } from "react";
import "../styles/filtercards.css";
export default function FilterCards(props) {
  const [keynamegame, setkeynamegame] = useState();

  useEffect(() => {
    if (props.gamename) {
      setkeynamegame(Object.keys(props.gamename));
    }
  }, [props.gamename]);
  const handlegameChange = (e) => {
    props.onGameChange(e.target.value);
  };
  return (
    <>
      <div className="filterBygame">
        <div className="nameofgame">{props.currentGame}</div>
        <div className="selectgame-filter">
          <select value={props.currentGame} onChange={handlegameChange}>
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
