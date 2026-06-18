import React from 'react';
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import "./SectionOne.css";

import slider1 from "./image/slider1.jpg";
import slider2 from "./image/slider2.jpg";
import slider3 from "./image/slider3.jpg";

function SectionOne() {
  const { t } = useTranslation();

  const slidesData = [
    { id: 1, bgImage: slider1, titleKey: "sectionOne.slide1_title", descKey: "sectionOne.slide1_desc" },
    { id: 2, bgImage: slider2, titleKey: "sectionOne.slide2_title", descKey: "sectionOne.slide2_desc" },
    { id: 3, bgImage: slider3, titleKey: "sectionOne.slide3_title", descKey: "sectionOne.slide3_desc" }
  ];

  return (
    <div className="sectionOne">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true, el: '.sectionOne-pagination' }}
        className="sectionOneSwiper"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="sectionOne-bg" style={{ backgroundImage: `url(${slide.bgImage})` }}>
              <div className="sectionOne-overlay"></div>
              <div className="container sectionOne-container">
                <div className="sectionOne-content">
                  <h3 className="sectionOne-title">{t(slide.titleKey)}</h3>
                  <p className="sectionOne-desc">{t(slide.descKey)}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="sectionOne-pagination"></div>
      </Swiper>
    </div>
  );
}

export default SectionOne;