import React from "react";
import { useState, useEffect } from "react";
import SearchTableSection from "../components/SearchTable";
import "../styles/Homepage.css";
export default function Homepage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.chess.com/pub/titled/GM")
      .then((response) => response.json())
      .then((data) => {
        const usersData = data.players.map((username, index) => ({
          id: index + 1,
          username: username,
        }));
        setUsers(usersData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="container">
      <div className="pagetableofdata">
        <SearchTableSection users={users} />
      </div>
    </div>
  );
}
