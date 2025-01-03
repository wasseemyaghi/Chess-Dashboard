import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardsStats from "../components/CardsStats";
import ClubsTable from "../components/ClubsTable";

import "../styles/profile.css";

export default function Profilepage() {
  const { username } = useParams();
  const [profileData, setProfileData] = useState("");
  const [countrycode, setcountrycode] = useState();
  const [countrydata, setcountrydata] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_base}/player/${username}`)
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
    fetch(countrycode)
      .then((response) => response.json())
      .then((data) => {
        setcountrydata(data);
      });
  }, [countrycode]);

  const getLastOnline = (timestamp) => {
    const now = Math.floor(Date.now() / 1000);
    const difference = now - timestamp;
    if (difference < 300) {
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
              className={`status-${getLastOnline(profileData?.last_online)}`}
            >
              {getLastOnline(profileData?.last_online)}
            </span>
          </div>
          <div className="country-section">
            <span className="country-name">{countrydata?.name}</span>
            <span className="country-flag-image">
              {countrydata ? (
                <img
                  src={`https://flagsapi.com/${countrydata.code}/flat/64.png`}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.style.display = "none";
                  }}
                  alt="flag"
                />
              ) : (
                ""
              )}
            </span>
          </div>
        </div>
        <CardsStats />
        <ClubsTable />
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
