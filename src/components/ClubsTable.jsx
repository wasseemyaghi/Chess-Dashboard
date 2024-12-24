import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
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
  useEffect(() => {
    fetch(`https://api.chess.com/pub/player/${username}/clubs`)
      .then((response) => response.json())
      .then((data) => {
        setUsernameClubs(data);
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
            {!usernameclubs ? (
              <>
                <TableRow sx={{ border: 0 }}>
                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "50px" }}
                    />
                  </TableCell>

                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton variant="circular" width={40} height={40} />
                  </TableCell>
                  <TableCell sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "200px" }}
                    />
                  </TableCell>
                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "200px" }}
                    />
                  </TableCell>
                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "200px" }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow sx={{ border: 0 }} className="club-row">
                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "50px" }}
                    />
                  </TableCell>

                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton variant="circular" width={40} height={40} />
                  </TableCell>
                  <TableCell sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "200px" }}
                    />
                  </TableCell>
                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "200px" }}
                    />
                  </TableCell>
                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "200px" }}
                    />
                  </TableCell>
                </TableRow>

                <TableRow sx={{ border: 0 }} className="club-row">
                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "50px" }}
                    />
                  </TableCell>

                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton variant="circular" width={40} height={40} />
                  </TableCell>
                  <TableCell sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "200px" }}
                    />
                  </TableCell>
                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "200px" }}
                    />
                  </TableCell>
                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "200px" }}
                    />
                  </TableCell>
                </TableRow>

                <TableRow sx={{ border: 0 }} className="club-row">
                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "50px" }}
                    />
                  </TableCell>

                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton variant="circular" width={40} height={40} />
                  </TableCell>
                  <TableCell sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "200px" }}
                    />
                  </TableCell>
                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "200px" }}
                    />
                  </TableCell>
                  <TableCell align="left" sx={{ border: 0 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem", width: "200px" }}
                    />
                  </TableCell>
                </TableRow>
              </>
            ) : (
              usernameclubs.clubs.map((club, index) => (
                <TableRow key={club.id} sx={{ border: 0 }} className="club-row">
                  <TableCell
                    align="center"
                    sx={{ border: 0 }}
                    className="club-id"
                  >
                    {index}
                  </TableCell>

                  <TableCell
                    align="center"
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
                    <div className="Go-to-club">
                      <div>Go to Club</div>
                      <div>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.41675 4.58341L8.83341 1.16675"
                            stroke="#303030"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.16675 2.83337V0.833374H7.16675"
                            stroke="#303030"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.58325 0.833374H3.74992C1.66659 0.833374 0.833252 1.66671 0.833252 3.75004V6.25004C0.833252 8.33337 1.66659 9.16671 3.74992 9.16671H6.24992C8.33325 9.16671 9.16659 8.33337 9.16659 6.25004V5.41671"
                            stroke="#303030"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
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
