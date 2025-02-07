import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Clubmatchesiconone from "../assets/img/clubmatchesicon1.svg";
import Clubmatchesicontwo from "../assets/img/clubmatchesicon2.svg";
import Skeleton from "@mui/material/Skeleton";
import "../styles/sliderclubpage.css";
export default function SliderClubPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [percentage, setPercentage] = useState(0);
  const [expandedCard, setExpandedCard] = useState(0);
  const [cardsSlideData, setCardsSlideData] = useState([]);
  const { id } = useParams();
  const totalLength = 300;
  const cardsPerPage = 4;
  const x1 = 10;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_base}/club/${id}/matches`)
      .then((response) => response.json())
      .then((data) => {
        const allMatches = [data];
        setCardsSlideData(allMatches);
        // const result = [];

        // for (const [key, value] of Object.entries(data)) {
        //   if (Array.isArray(value)) {
        //     value.forEach((item) => {
        //       result.push({ category: key, ...item });
        //     });
        //   }
        // }

        // console.log(result);
        console.log(allMatches);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsSlideData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cardsSlideData.length / cardsPerPage);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPercentage(60);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };
  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
  return (
    <>
      <div>
        <div className="clubmatches">
          <div className="clubmatches-title">Club Matches</div>
          {cardsSlideData.length === 0 ? (
            <Skeleton
              variant="rectangular"
              sx={{ borderRadius: "40px" }}
              width={370}
              height={380}
            />
          ) : (
            currentCards &&
            currentCards.map((match, index) => (
              <div key={index} onClick={() => toggleCard(index)}>
                {expandedCard !== index && (
                  <div className="titlecard-expanded">
                    Pan-American League R6: Argentina B vs. USA: Sout West
                  </div>
                )}
                {expandedCard === index && (
                  <div className="clubmatchescard">
                    <div className="clubmatchescard-vs">
                      <div className="first-team-name">
                        <div>
                          <img
                            src={Clubmatchesiconone}
                            alt="Clubmatchesiconone"
                          />
                        </div>
                        <div>Club Name</div>
                      </div>
                      <div className="vs-text">VS</div>
                      <div className="second-team-name">
                        <div>
                          <img
                            src={Clubmatchesicontwo}
                            alt="Clubmatchesicontwo"
                          />
                        </div>
                        <div>Team Argentina B</div>
                      </div>
                    </div>
                    <div>
                      Anna Muzychuk Fan Club vs Hikaru Nakamura Fan Club
                    </div>
                    <div>
                      <svg
                        className="line-chart"
                        viewBox="0 0 320 20"
                        height="40"
                        width="335"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1={x1}
                          y1="10"
                          x2={x1 + totalLength}
                          y2="10"
                          stroke="#D9D9D9"
                          strokeWidth="12"
                          strokeLinecap="round"
                        />
                        <line
                          x1={x1}
                          y1="10"
                          x2={x1 + (percentage / 100) * totalLength}
                          y2="10"
                          stroke="#FFC61A"
                          strokeWidth="12"
                          strokeLinecap="round"
                        >
                          <animate
                            attributeName="x2"
                            from={x1}
                            to={x1 + (percentage / 100) * totalLength}
                            dur="2s"
                            fill="freeze"
                          />
                        </line>
                      </svg>
                      <div className="svg-text">Finished</div>
                    </div>
                    <div className="club-matches-info">
                      <div>Time Class</div>
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
                        <span></span>
                        <span></span>
                      </div>
                      <div className="club_info_data">Daily</div>
                    </div>
                    <div className="club-matches-info">
                      <div>Start Time</div>
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
                      </div>
                      <div className="club_info_data">12th March, 2025</div>
                    </div>
                    <div className="club-matches-info">
                      <div>Result</div>
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
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div>Win</div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
          {/* {currentCards &&
            currentCards.map((match, index) => (
              <div key={index} onClick={() => toggleCard(index)}>
                {expandedCard !== index && (
                  <div className="titlecard-expanded">
                    Pan-American League R6: Argentina B vs. USA: Sout West
                  </div>
                )}
                {expandedCard === index && (
                  <div className="clubmatchescard">
                    <div className="clubmatchescard-vs">
                      <div className="first-team-name">
                        <div>
                          <img
                            src={Clubmatchesiconone}
                            alt="Clubmatchesiconone"
                          />
                        </div>
                        <div>Club Name</div>
                      </div>
                      <div className="vs-text">VS</div>
                      <div className="second-team-name">
                        <div>
                          <img
                            src={Clubmatchesicontwo}
                            alt="Clubmatchesicontwo"
                          />
                        </div>
                        <div>Team Argentina B</div>
                      </div>
                    </div>
                    <div>
                      Anna Muzychuk Fan Club vs Hikaru Nakamura Fan Club
                    </div>
                    <div>
                      <svg
                        className="line-chart"
                        viewBox="0 0 320 20"
                        height="40"
                        width="335"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1={x1}
                          y1="10"
                          x2={x1 + totalLength}
                          y2="10"
                          stroke="#D9D9D9"
                          strokeWidth="12"
                          strokeLinecap="round"
                        />
                        <line
                          x1={x1}
                          y1="10"
                          x2={x1 + (percentage / 100) * totalLength}
                          y2="10"
                          stroke="#FFC61A"
                          strokeWidth="12"
                          strokeLinecap="round"
                        >
                          <animate
                            attributeName="x2"
                            from={x1}
                            to={x1 + (percentage / 100) * totalLength}
                            dur="2s"
                            fill="freeze"
                          />
                        </line>
                      </svg>
                      <div className="svg-text">Finished</div>
                    </div>
                    <div className="club-matches-info">
                      <div>Time Class</div>
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
                        <span></span>
                        <span></span>
                      </div>
                      <div className="club_info_data">Daily</div>
                    </div>
                    <div className="club-matches-info">
                      <div>Start Time</div>
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
                      </div>
                      <div className="club_info_data">12th March, 2025</div>
                    </div>
                    <div className="club-matches-info">
                      <div>Result</div>
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
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div>Win</div>
                    </div>
                  </div>
                )}
              </div>
            ))} */}
          <div
            className="custom-pagination"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePaginationChange}
              siblingCount={0}
            />
          </div>
        </div>
      </div>
      {/* <div className="clubmatches">
        <div className="clubmatches-title">Club Matches</div>
        <div className="clubmatchescard">
          <div className="clubmatchescard-vs">
            <div className="first-team-name">
              <div>
                <img src={Clubmatchesiconone} alt="Clubmatchesiconone" />
              </div>
              <div>Club Name</div>
            </div>
            <div className="vs-text">VS</div>
            <div className="second-team-name">
              <div>
                <img src={Clubmatchesicontwo} alt="Clubmatchesicontwo" />
              </div>
              <div>Team Argentina B</div>
            </div>
          </div>
          <div>Anna Muzychuk Fan Club vs Hikaru Nakamura Fan Club</div>
          <div>
            <svg
              className="line-chart"
              viewBox="0 0 320 20"
              height="40"
              width="335"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1={x1}
                y1="10"
                x2={x1 + totalLength}
                y2="10"
                stroke="#D9D9D9"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <line
                x1={x1}
                y1="10"
                x2={x1 + (percentage / 100) * totalLength}
                y2="10"
                stroke="#FFC61A"
                strokeWidth="12"
                strokeLinecap="round"
              >
                <animate
                  attributeName="x2"
                  from={x1}
                  to={x1 + (percentage / 100) * totalLength}
                  dur="2s"
                  fill="freeze"
                />
              </line>
            </svg>
            <div className="svg-text">Finished</div>
          </div>
          <div className="club-matches-info">
            <div>Time Class</div>
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
              <span></span>
              <span></span>
            </div>
            <div className="club_info_data">Daily</div>
          </div>
          <div className="club-matches-info">
            <div>Start Time</div>
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
            </div>
            <div className="club_info_data">12th March, 2025</div>
          </div>
          <div className="club-matches-info">
            <div>Result</div>
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
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>Win</div>
          </div>
        </div>
        <div
          className="custom-pagination"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Pagination
            count={totalSlides}
            page={currentPage}
            onChange={handlePaginationChange}
            siblingCount={0}
          />
        </div>
      </div> */}
    </>
  );
}
