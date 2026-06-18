import { useTranslation } from "react-i18next";
import "./Header.css";
import React, { useState } from 'react';
import logo from "./image/logo.png";

function Header() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="header">
            <div className="container">
                <div className="header-container">

                    {/* Mobil va Desktop Navigatsiya paneli */}
                    <nav className={`header-nav ${isMenuOpen ? "active" : ""}`}>
                        
                        {/* Mobil menyu ichidagi maxsus tepa qism (Logo va Krestik) */}
                        <div className="mobile-menu-header">
                            <img src={logo} alt="AQVO Logo" className="mobile-menu-logo" />
                            <div className="close-menu-btn" onClick={toggleMenu}>
                                &times;
                            </div>
                        </div>

                        {/* Navigatsiya havolalari */}
                        <ul className="header-list">
                            <li>
                                <a className="header-link" href="#home" onClick={() => setIsMenuOpen(false)}>
                                    {t("header.home")}
                                </a>
                            </li>
                            <li>
                                <a className="header-link" href="#about" onClick={() => setIsMenuOpen(false)}>
                                    {t("header.about")}
                                </a>
                            </li>
                        </ul>
                    
                        {/* Figma chizmasidagi mobil til va tugma bloki */}
                        <div className="header-lengu mobile-only">
                            <div className="mobile-lang-selector">
                                <button 
                                    className={`lang-btn ${i18n.language === 'ru' ? 'active' : ''}`} 
                                    onClick={() => handleLanguageChange('ru')}
                                >
                                    RU
                                </button>
                                <button 
                                    className={`lang-btn ${i18n.language === 'uz' ? 'active' : ''}`} 
                                    onClick={() => handleLanguageChange('uz')}
                                >
                                    UZ
                                </button>
                                <button 
                                    className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`} 
                                    onClick={() => handleLanguageChange('en')}
                                >
                                    EN
                                </button>
                            </div>
                        </div>
                    </nav>

                    {/* Markazdagi asosiy logo */}
                    <div className="header-logo-box">
                        <a className="logo" href="#">
                            <img src={logo} alt="AQVO Logo" />
                        </a>
                    </div>

                    {/* Faqat Desktop uchun til va bog'lanish tugmasi */}
                    <div className="header-lengu desktop-only">
                        <select className="select" onChange={(e) => handleLanguageChange(e.target.value)} value={i18n.language}>
                            <option value="uz">UZB</option>
                            <option value="en">ENG</option>
                            <option value="ru">RUS</option>
                        </select>
                        <button type="button" className="header-btn">{t("header.header-btn")}</button>
                    </div>

                    {/* Burger chiziqchalari (Faqat mobil ekranda ko'rinadi) */}
                    <div className={`burger-menu ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </div>
            
            {/* Orqa fonni xiralashtiruvchi qatlam (Ochilganda fon bosilsa yopiladi) */}
            {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
        </div>
    );
}

export default Header;