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
                    <div className="input-group">
                    <label htmlFor="text">{t(SectionThree.label1)}</label>
                    <input type="text" required placeholder="{t(SectionThree.input1)}" />
                    <label htmlFor="text">{t(SectionThree.label2)}</label>
                    <input type="text" required placeholder="{t(SectionThree.input2)}" />
                   </div>
                    <div className="input-group">
                    <label htmlFor="number">{t(SectionThree.label3)}</label>
                    <input type="number" required placeholder="{t(SectionThree.input3)}" />
                    <label htmlFor="text">{t(SectionThree.label1)}</label>
                    <input type="text" required placeholder="{t(SectionThree.inp4t1)}" />
                   </div>
                    <div className="input-group">
                    <label htmlFor="number">{t(SectionThree.label3)}</label>
                    <input type="number" required placeholder="{t(SectionThree.input3)}" />
                    <label htmlFor="text">{t(SectionThree.label1)}</label>
                    <input type="text" required placeholder="{t(SectionThree.inp4t1)}" />
                   </div>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SectionThree