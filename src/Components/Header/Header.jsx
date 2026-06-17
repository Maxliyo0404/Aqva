import { useTranslation } from "react-i18next";
import "./Header.css";
import React, { useState } from 'react'
import

function Header() {
    const {t} = useTranslation();
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
                <a className="logo" href="#"><img src={logoPages} alt="rasm" /></a>
                 <nav className={`header-nav ${isMenuOpen ? "active" : ""}`}>
                <ul className="header-list">
                    <li><Link className="header-link" to="home">{t("header.home")}</Link></li>
                    <li><Link className="header-link" to="about">{t("header.about")}</Link></li>
                </ul>
                <div className="header-actions">
                    <select className="select" onChange={handleChangeLanguage} value={i18n.language}>
                      <option value="uz">Uz</option>
                      <option value="en">Eng</option>
                      <option value="ru"> Rus</option>
                    </select>
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