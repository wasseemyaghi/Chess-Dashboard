import React from "react";
import { useState, useEffect } from "react";
import SearchTableSection from "../components/SearchTable";
import "../styles/users.css";

export default function Homepage() {
  const [users, setUsers] = useState([]);
  const [isloading, setisloading] = useState(false);

  const fetchUsersByTitle = (title) => {
    setisloading(false);
    fetch(`https://api.chess.com/pub/titled/${title}`)
      .then((response) => response.json())
      .then((data) => {
        const usersData = data.players.map((username, index) => ({
          id: index + 1,
          username: username,
        }));
        setUsers(usersData);
        setisloading(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchUsersByTitle("GM");
  }, []);
  return (
    <div className="container">
      <div className="pagetableofdata">
        <SearchTableSection
          users={users}
          isloading={isloading}
          onTitleChange={fetchUsersByTitle}
        />
      </div>
    </div>
  );
}
