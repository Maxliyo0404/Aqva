import { useTranslation } from "react-i18next";
import "./Footer.css";
import React from 'react'

function Footer() {
    const {t, i18n} = useTranslation();
  return (
    <div className="footer">
        <div className="container"></div>
    </div>
  )
}

export default Footer