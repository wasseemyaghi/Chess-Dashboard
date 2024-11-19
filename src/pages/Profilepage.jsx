import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RiUserFollowFill } from "react-icons/ri";
import { BiPulse } from "react-icons/bi";
import { GiPawn } from "react-icons/gi";
import svg from "../assets/img/profileimg.svg";
import "../styles/Profilepage.css";
export default function Profilepage() {
  const { username } = useParams();
  const [profileData, setProfileData] = useState("");
  useEffect(() => {
    fetch(`https://api.chess.com/pub/player/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [username]);
  // if (!profileData) {
  //   return <div></div>;
  // }
  const getLastOnline = (timestamp) => {
    const now = Math.floor(Date.now() / 1000);
    const difference = now - timestamp;

    if (difference < 60) {
      return "Just now";
    } else if (difference < 3600) {
      const minutes = Math.floor(difference / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (difference < 86400) {
      const hours = Math.floor(difference / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(difference / 86400);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }
  };
  return (
    <div className="container">
      <div className="profile-page">
        <div className="profile-page-image">
          {profileData.avatar ? (
            <img
              src={profileData.avatar}
              alt={`${profileData.username}'s avatar`}
            />
          ) : (
            <img src={svg} alt="Default profile" className="default-image" />
          )}
        </div>
        <div className="profile-page-info">
          <div className="profile-First-lineinfo">
            <span>{profileData.title}</span>
            <div className="profile-info-username">{profileData.username}</div>
          </div>
          <div className="profile-info-name">{profileData.name}</div>
          <div className="profile-info-lastline">
            <div>
              <BiPulse style={{ fontSize: "2rem" }} />
              <p>{getLastOnline(profileData.last_online)}</p>
            </div>
            <div>
              <GiPawn style={{ fontSize: "2rem" }} />
              <p>{new Date(profileData.joined * 1000).toLocaleDateString()}</p>
            </div>
            <div>
              <RiUserFollowFill style={{ fontSize: "2rem" }} />
              <p>{profileData.followers}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
