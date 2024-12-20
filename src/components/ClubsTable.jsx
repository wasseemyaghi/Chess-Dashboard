import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import "../styles/clubstable.css";
export default function ClubsTable() {
  const { username } = useParams();
  const [usernameclubs, setUsernameClubs] = useState();
  const [isloading, setisloading] = useState(false);
  useEffect(() => {
    setisloading(false);
    fetch(`https://api.chess.com/pub/player/${username}/clubs`)
      .then((response) => response.json())
      .then((data) => {
        setUsernameClubs(data);
        setisloading(true);
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
            {usernameclubs &&
              usernameclubs.clubs.map((club, index) => (
                <TableRow key={club.id} sx={{ border: 0 }} className="club-row">
                  <TableCell
                    align="left"
                    sx={{ border: 0 }}
                    className="club-id"
                  >
                    {index}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ border: 0 }}
                    className="club-icon"
                  >
                    <img src={club.icon} alt="" />
                  </TableCell>
                  <TableCell sx={{ border: 0 }}>{club.name}</TableCell>
                  <TableCell align="left" sx={{ border: 0 }}>
                    {new Date(club.joined * 1000).toDateString()}
                  </TableCell>
                  <TableCell align="left" sx={{ border: 0 }}>
                    {club.url}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
