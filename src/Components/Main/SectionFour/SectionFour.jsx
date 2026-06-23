import { useTranslation } from "react-i18next";
import "./SectionFour.css";
import React from 'react'
import four1 from "./image/four1.png";
import four2 from "./image/four2.png";
import four3 from "./image/four3.png";
import four4 from "./image/four4.png";

function SectionFour() {
  const {t, i18n} = useTranslation();
  return (
    <div className="sectionFour">
      <div className="container">
        <div className="four-wrapper">

        </div>
      </div>
    </div>
  )
}

export default SectionFour