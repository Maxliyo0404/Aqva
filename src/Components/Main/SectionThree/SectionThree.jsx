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
                    <p className="sectionThree-text1">{t("sectionThree.three-text1")}</p>
                    <p className="sectionThree-text2">{t("sectionThree.three-text2")}</p>
                    <p className="sectionThree-text3">{t("sectionThree.three-text3")}</p>
                    <p className="sectionThree-text4">{t("sectionThree.three-text4")}</p>
        
            </div>
            <div className="three-right">
                <form className="trhee-form">
                    <label htmlFor="name">{t(SectionThree.label1)}</label>
                    <input type="text" />
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SectionThree