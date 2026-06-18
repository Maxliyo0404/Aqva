import React from 'react';
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee"; 
import "./SectionTwo.css";

import aqvo from "./image/aqvo.png";

import two11 from "./image/two11.jpg"; import two12 from "./image/two12.jpg";
import two13 from "./image/two13.jpg"; import two14 from "./image/two14.jpg";
import two15 from "./image/two15.jpg"; import two16 from "./image/two16.jpg";
import two17 from "./image/two17.jpg"; import two18 from "./image/two18.jpg";

import two21 from "./image/two21.jpg"; import two22 from "./image/two22.jpg";
import two23 from "./image/two23.jpg"; import two24 from "./image/two24.jpg";
import two25 from "./image/two25.jpg"; import two26 from "./image/two26.jpg";
import two27 from "./image/two27.jpg"; import two28 from "./image/two28.jpg";

function SectionTwo() {
    const { t } = useTranslation();
    const MarqueeComp = Marquee.default || Marquee;

    const topImages = [two11, two12, two13, two14, two15, two16, two17, two18];
    const bottomImages = [two21, two22, two23, two24, two25, two26, two27, two28];

    return (
        <div className="sectionTwo">
            <div className="container">
                <div className="sectionTwo-header">
                    <div className="header-left">
                        <h2 className="sectionTwo-title">{t("sectionTwo.title", "SIZNING AQVO BILAN LAHZALARINGIZ")}</h2>
                        <img src={aqvo} alt="Aqvo" className="sectionTwo-logo" />
                    </div>
                    <div className="social-links">
                        <a href="https://instagram.com/aqvo_uz" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://t.me/aqvo_uz" target="_blank" rel="noreferrer">Telegram</a>
                    </div>
                </div>
            </div>

            <MarqueeComp speed={40} pauseOnHover={true} className="marquee-wrapper">
                {topImages.map((img, i) => <div key={`t-${i}`} className="img-large"><img src={img} alt="big" /></div>)}
            </MarqueeComp>

            <MarqueeComp speed={30} direction="right" pauseOnHover={true} className="marquee-wrapper-bottom">
                {bottomImages.map((img, i) => <div key={`b-${i}`} className="img-small"><img src={img} alt="small" /></div>)}
            </MarqueeComp>
        </div>
    )
}
export default SectionTwo;