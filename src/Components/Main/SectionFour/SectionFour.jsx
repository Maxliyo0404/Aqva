import React from 'react';
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Swiper uslublari
import 'swiper/css';

import "./SectionFour.css";
import four1 from "./image/four1.png";
import four2 from "./image/four2.png";
import four3 from "./image/four3.png";
import four4 from "./image/four4.png";

function SectionFour() {
  const { t } = useTranslation();
  const images = [four1, four2, four3, four4, four1, four2, four3, four4];

  return (
    <div className="sectionFour">
      <div className="container">
        < className="four-container">
        <h2 className="four-title">{t("sectionFour.four-title")}</h2>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="four-slider"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SectionFour;