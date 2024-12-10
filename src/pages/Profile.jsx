import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import svg from "../assets/img/profileimg.svg";
import "../styles/profile.css";
import CardsStats from "../components/CardsStats";
export default function Profilepage() {
  const { username } = useParams();
  const [profileData, setProfileData] = useState("");
  const [countrycode, setcountrycode] = useState();
  const [countrydata, setcountrydata] = useState();
  useEffect(() => {
    fetch(`https://api.chess.com/pub/player/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data);
        if (data.country) {
          setcountrycode(data.country);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [username]);

  useEffect(() => {
    fetch(`${countrycode}`)
      .then((response) => response.json())
      .then((data) => {
        setcountrydata(data);
      });
  }, [countrycode]);

  // get last online function
  const getLastOnline = (timestamp) => {
    const now = Math.floor(Date.now() / 1000);
    const difference = now - timestamp;
    if (difference < 60) {
      return "online";
    } else {
      return "offline";
    }
  };
  return (
    <div className="container">
      <div className="profile-page">
        <div className="usernameandcountry">
          <div className="username-section">
            <span className="username-title">Player Username: {username}</span>
            <span
              className={
                getLastOnline(profileData.last_online) === "online"
                  ? "status-online"
                  : "status-offline"
              }
            >
              {getLastOnline(profileData.last_online)}
            </span>
          </div>
          <div className="country-section">
            <span className="country-name">
              {countrydata ? countrydata.name : ""}
            </span>
            <span className="country-flag-image">
              {countrydata ? (
                <img
                  src={`https://flagsapi.com/${countrydata.code}/flat/64.png`}
                  alt="flag"
                />
              ) : (
                ""
              )}
            </span>
          </div>
        </div>
        <CardsStats username={username} />
        {/* <div className="cards">
          <div className="card-box1">
            {profileData.avatar ? (
              <img
                src={profileData.avatar}
                alt={`${profileData.username}'s avatar`}
              />
            ) : (
              <img src={svg} alt="Default profile" className="default-image" />
            )}
          </div>
        </div> */}
        {/* <div className="profile-page-image">
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
        </div> */}
      </div>
    </div>
  );
}
