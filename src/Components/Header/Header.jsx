import { useTranslation } from "react-i18next";
import "./Header.css";
import React, { useState } from 'react'
import logo from "./image/logo.png"
import i18next from "i18next";
function Header() {
    const {t, i18n} = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState (false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleChangeLanguage = (event) =>{
        i18n.changeLanguage(event.target.value)
    };
  return (
    <div className="header">
        <div className="container">
            <div className="header-container">
                 <nav className={`header-nav ${isMenuOpen ? "active" : ""}`}>
                <ul className="header-list">
                    <li><a className="header-link" href="#">{t("header.home")}</a></li>
                    <li><a className="header-link" href="#">{t("header.about")}</a></li>
                </ul>
                 <a className="logo" href="#"><img src={logo} alt="rasm" /></a>
                 <div className="header-lengu">
                <div className="header-actions">
                    <select className="select" onChange={handleChangeLanguage} value={i18n.language}>
                      <option value="uz">Uz</option>
                      <option value="en">Eng</option>
                      <option value="ru"> Rus</option>
                    </select>
                  </div>
                  <button type="submit" className="header-btn">{t("header.header-btn")}</button>
                    </div>
             </nav>
      <div className={`burger-menu ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
            </div>
        </div>
    </div>
  )
}

export default Header