import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import countryicon from "../assets/img/clubcardname_countryicon.svg";
import membersicon from "../assets/img/clubcardname_membersicon.svg";
import lastactivityicon from "../assets/img/clubcardname_lastactivityicon.svg";
import visibilityicon from "../assets/img/clubcardname_visibilityicon.svg";
import dailyratingicon from "../assets/img/clubcardname_dailyratingicon.svg";
import linkicon from "../assets/img/clubcardname_linkicon.svg";
import Skeleton from "@mui/material/Skeleton";
import "../styles/clubnamecard.css";
export default function ClubNameCard(props) {
  const [clubCardName, setclubCardName] = useState();
  const { clubnameinfo } = props;
  useEffect(() => {
    setclubCardName(clubnameinfo);
  }, [clubnameinfo]);
  return (
    <>
      <div className="clubnamecard">
        <div className="club_card"></div>
        <div className="club_card_profile">
          <div className="club_card_circle"></div>
          <div className="club_card_name">
            <span className="club_card_name_title">
              {clubCardName ? (
                clubCardName.name
              ) : (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem" }}
                  width={240}
                />
              )}
            </span>
            <span className="club_card_date">
              {clubCardName ? (
                new Date(clubCardName.last_activity * 1000).toDateString()
              ) : (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", display: "block", margin: "0 auto" }}
                  width={150}
                />
              )}
            </span>
          </div>
        </div>
        <div className="club_card_info">
          <div className="club_card_width">
            <div className="club_info">
              <div className="club_info_country_img">
                <img src={countryicon} alt="countryicon" />
              </div>
              <div className="club_info_card_name">Country</div>
              <div className="club_info_dotted">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="club_info_data">(-)</div>
            </div>
            <div className="club_info">
              <div className="club_info_members_img">
                <img src={membersicon} alt="membersicon" />
              </div>
              <div className="club_info_card_name">Members</div>
              <div className="club_info_dotted">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="club_info_data">
                {clubCardName ? (
                  clubCardName.members_count
                ) : (
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={50}
                  />
                )}
              </div>
            </div>
            <div className="club_info">
              <div className="club_info_lastactivity_img">
                <img src={lastactivityicon} alt="lastactivityicon" />
              </div>
              <div className="club_info_card_name">last_activity</div>
              <div className="club_info_dotted">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="club_info_data">
                {clubCardName ? (
                  new Date(clubCardName.last_activity * 1000).toDateString()
                ) : (
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={120}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="club_card_width">
            <div className="club_info">
              <div className="club_info_Visibility_img">
                <img src={visibilityicon} alt="visibilityicon" />
              </div>
              <div className="club_info_card_name">Visibility</div>
              <div className="club_info_dotted">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="club_info_data">
                {clubCardName ? (
                  clubCardName.visibility
                ) : (
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={50}
                  />
                )}
              </div>
            </div>
            <div className="club_info">
              <div className="club_info_DailyRating_img">
                <img src={dailyratingicon} alt="dailyratingicon" />
              </div>
              <div className="club_info_card_name">Average Daily Rating</div>
              <div className="club_info_dotted">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="club_info_data">
                {clubCardName ? (
                  clubCardName.average_daily_rating
                ) : (
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={60}
                  />
                )}
              </div>
            </div>
            <div className="club_info">
              <div className="club_info_URL_img">
                <img src={linkicon} alt="linkicon" />
              </div>
              <div className="club_info_card_name">Club URL</div>
              <div className="club_info_dotted">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="club_info_data">
                {clubCardName ? (
                  <Link
                    to={`${clubCardName.url}`}
                    className="club_info_data_link"
                  >
                    Link To Club
                  </Link>
                ) : (
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={100}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
