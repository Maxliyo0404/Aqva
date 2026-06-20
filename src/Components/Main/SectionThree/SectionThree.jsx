import { useTranslation } from "react-i18next";
import "./SectionThree.css";
import React from 'react'

function SectionThree() {
    const {t, i18n} = useTranslation();
  return (
    <div className="sectionThree">
        <div className="container">
            <div className="sectionThree-werapper">
                <div className="three-left">
                    <h2 className="sectionThree-title">{t("sectionThree.three-title")}</h2>
                    <p className="sectionThree-text">{t("sectionThree.three-text")}</p>
                    <p className="sectionThree-text">{t("sectionThree.three-text")}</p>
                    <p className="sectionThree-text">{t("sectionThree.three-text")}</p>
        
            </div>
            </div>
        </div>
    </div>
  )
}

export default SectionThree