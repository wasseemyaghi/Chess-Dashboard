import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import linkSvg from "../assets/img/link.svg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "../styles/clubstable.css";
import TableSkeleton from "./TableSkeleton";

export default function ClubsTable() {
  const { username } = useParams();
  const [playerClubs, setPlayerClubs] = useState();
  const navigate = useNavigate();
  const handleClubClick = (id) => {
    navigate(`/club/${id}`);
  };

  useEffect(() => {
    fetch(`https://api.chess.com/pub/player/${username}/clubs`)
      .then((response) => response.json())
      .then((data) => {
        setPlayerClubs(data);
        console.log(data["@id"]);
      })
      .catch((error) => console.error("Error fetching stats:", error));
  }, [username]);

  return (
    <>
      <TableContainer component={Paper} sx={{ borderRadius: 10, mt: 8 }}>
        <Table width={900}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#303030" }}>
              <TableCell align="center" sx={{ color: "white" }}>
                id
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Icon
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Club Name
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Joined on
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Club Link
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bodyTable">
            {!playerClubs ? (
              <TableSkeleton />
            ) : (
              playerClubs.clubs.map((club, index) => (
                <TableRow
                  key={index}
                  sx={{ border: 0 }}
                  className="player__club-row"
                >
                  <TableCell
                    align="center"
                    sx={{ border: 0 }}
                    className="player__club-id"
                  >
                    {index}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{ border: 0 }}
                    className="player__club-icon"
                  >
                    <img src={club.icon} alt="" />
                  </TableCell>
                  <TableCell sx={{ border: 0 }}>{club.name}</TableCell>
                  <TableCell align="left" sx={{ border: 0 }}>
                    {new Date(club.joined * 1000).toDateString()}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ border: 0 }}
                    onClick={() =>
                      handleClubClick(club["@id"].split("/").pop())
                    }
                  >
                    <div className="Go-to-club">
                      <div>Go to Club</div>
                      <div>
                        <img src={linkSvg} alt="linkSvg" />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
