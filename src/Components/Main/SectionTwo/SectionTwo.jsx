import React from 'react';
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import "./SectionTwo.css";

import aqvo from "./image/aqvo.png";

// Yuqori qator rasmlari
import two11 from "./image/two11.jpg";
import two12 from "./image/two12.jpg";
import two13 from "./image/two13.jpg";
import two14 from "./image/two14.jpg";
import two15 from "./image/two15.jpg";
import two16 from "./image/two16.jpg";
import two17 from "./image/two17.jpg";
import two18 from "./image/two18.jpg";

// Pastki qator rasmlari
import two21 from "./image/two11.jpg";
import two22 from "./image/two12.jpg";
import two23 from "./image/two13.jpg";
import two24 from "./image/two14.jpg";
import two25 from "./image/two15.jpg";
import two26 from "./image/two16.jpg";
import two27 from "./image/two17.jpg";
import two28 from "./image/two18.jpg";

function SectionTwo() {
    const { t } = useTranslation();

    // Rasmlarni alohida massivlarga joyladik
    const topImages = [two11, two12, two13, two14, two15, two16, two17, two18];
    const bottomImages = [two21, two22, two23, two24, two25, two26, two27, two28];

    return (
        <div className="sectionTwo">
            <div className="container">
                {/* Header qismi */}
                <div className="sectionTwo-header">
                    <h2 className="sectionTwo-title">{t("sectionTwo.title")}</h2>
                    <img src={aqvo} alt="Aqvo" className="sectionTwo-logo" />
                    <div className="social-links">
                        <a href="https://instagram.com/aqvo_uz" target="_blank" rel="noreferrer">Bizning Instagram</a>
                        <a href="https://t.me/aqvo_uz" target="_blank" rel="noreferrer">Bizning Telegram</a>
                    </div>
                </div>

                {/* Birinchi qator: Katta rasmlar */}
                <Marquee speed={50} pauseOnHover={true} className="marquee-wrapper">
                    {topImages.map((img, index) => (
                        <div key={`top-${index}`} className="img-box-large">
                            <img src={img} alt="large" />
                        </div>
                    ))}
                </Marquee>

                {/* Ikkinchi qator: Kichik rasmlar */}
                <Marquee speed={35} direction="right" pauseOnHover={true} className="marquee-wrapper-small">
                    {bottomImages.map((img, index) => (
                        <div key={`bottom-${index}`} className="img-box-small">
                            <img src={img} alt="small" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default SectionTwo;