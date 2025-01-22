import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Pagination from "@mui/material/Pagination";
export default function SliderClubPage() {
  const totalSlides = 10;
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
    swiperInstance.slideTo(value - 1);
  };
  return (
    <div>
      <Swiper
        slidesPerView={1}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex + 1)}
      >
        {/* Slides */}
        {Array.from({ length: totalSlides }).map((_, index) => (
          <SwiperSlide key={index}>
            <div style={{ padding: "20px", textAlign: "center" }}>
              Slide {index + 1}
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Pagination */}
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
      </Swiper>
    </div>
  );
}
