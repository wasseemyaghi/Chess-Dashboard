import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

export default function SearchTableSection({
  users,
  isloading,
  onTitleChange,
}) {
  const [searchText, setSearchText] = useState("");
  const [titledPlayer, settitledPlayer] = useState("GM");
  console.log(titledPlayer);
  const navigate = useNavigate();
  const filteredUsers =
    searchText.length >= 3
      ? users.filter((user) =>
          user.username.toLowerCase().includes(searchText.toLowerCase())
        )
      : users;

  const handleRowClick = (username) => {
    navigate(`/Profilepage/${username}`);
  };
  const handleTitleChange = (e) => {
    const selectedTitle = e.target.value;
    settitledPlayer(selectedTitle);
    onTitleChange(selectedTitle);
  };
  return (
    <div className="search-table">
      <div className="searchandFilter">
        <div className="searchinputleft">
          <input
            type="text"
            placeholder="Search by username..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filterright">
          Filter By
          <select value={titledPlayer} onChange={handleTitleChange}>
            <option value="GM">GM</option>
            <option value="WGM">WGM</option>
            <option value="IM">IM</option>
            <option value="WIM">WIM</option>
            <option value="FM">FM</option>
            <option value="WFM">WFM</option>
            <option value="NM">NM</option>
            <option value="WNM">WNM</option>
            <option value="CM">CM</option>
            <option value="WCM">WCM</option>
          </select>
        </div>
      </div>
      {isloading ? (
        <div>
          {filteredUsers.length > 0 ? (
            <table className="user-table" border="1">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    onClick={() => handleRowClick(user.username)} // Add click handler
                    style={{ cursor: "pointer" }}
                  >
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No matches for “{searchText}”</p>
          )}
        </div>
      ) : (
        <Skeleton variant="rectangular" width={950} height={700} />
      )}
    </div>
  );
}
