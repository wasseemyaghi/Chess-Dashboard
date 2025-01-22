import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClubNameCard from "../components/ClubNameCard";
import "../styles/club.css";
export default function Club() {
  const { id } = useParams();
  const [clubData, setClubData] = useState("");
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_base}/club/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setClubData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  return (
    <div className="container">
      <div className="club-page">
        <div className="club">
          <div className="club_name">{clubData && clubData.name}</div>
          <div className="btn_join">
            <button>Join The Club</button>
          </div>
        </div>
        <ClubNameCard clubnameinfo={clubData} />
        {/* {clubData && <div>{clubData.average_daily_rating}</div>} */}
      </div>
    </div>
  );
}
