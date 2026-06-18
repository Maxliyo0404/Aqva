import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'
import hero1 from "./image/hero1.png";
import hero2 from "./image/hero2.png";

function Hero() {
  const {t, i18n} = useTranslation();
  return (
    <div className="hero">
      <div className="container">

      </div>
    </div>
  )
}

export default Hero;