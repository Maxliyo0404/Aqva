import { useTranslation } from "react-i18next";
import "./Header.css";
import React, { useState } from 'react';
import logo from "./image/logo.png";

function Header() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
   const toggleMenu = () => {
        const newState = !isMenuOpen;
        setIsMenuOpen(newState);
        
        // Body ga klass qo'shish yoki olib tashlash
        if (newState) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }
    };
    
    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="header">
            <div className="container">
                <div className="header-container">
                    <nav className={`header-nav ${isMenuOpen ? "active" : ""}`}>
                        
                        <div className="mobile-menu-header">
                            <img src={logo} alt="AQVO Logo" className="mobile-menu-logo" />
                            <div className="close-menu-btn" onClick={toggleMenu}>
                                &times;
                            </div>
                        </div>

                        <ul className="header-list">
                          <li>
            
                                <a className="header-link" href="#home" onClick={toggleMenu}>
                                    {t("header.home")}
                                </a>
                            </li>
                            <li>
                                <a className="header-link" href="#about" onClick={toggleMenu}>
                                    {t("header.about")}
                                </a>
                            </li>
                        </ul>
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
                    <div className="header-logo-box">
                        <a className="logo" href="#">
                            <img src={logo} alt="AQVO Logo" />
                        </a>
                    </div>
                    <div className="header-lengu desktop-only">
                        <select className="select" onChange={(e) => handleLanguageChange(e.target.value)} value={i18n.language}>
                            <option value="uz">UZB</option>
                            <option value="en">ENG</option>
                            <option value="ru">RUS</option>
                        </select>
                        <button type="button" className="header-btn">{t("header.header-btn")}</button>
                    </div>
                    <div className={`burger-menu ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </div>

            {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
        </div>
    );
}

export default Header;