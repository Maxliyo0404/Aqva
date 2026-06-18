import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import "./Hero.css";

import hero1 from "./image/hero1.png"; 
import hero2 from "./image/hero2.png"; 

function Hero() {
  const { t } = useTranslation();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '', surname: '', phone: '', telegram: '', region: '', service: '', message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = `8686982263:AAFKB7SAvXxSXiV_diDuY3nYRuwOA_bXUf4`;
    const chat_id = 647264939;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const SendContent = `🔔 *Yangi ariza:* \n\n👤 ${formData.name} ${formData.surname}\n📞 ${formData.phone}\n📍 ${formData.region}\n📦 ${formData.service}`;

    try {
      await axios({ url: url, method: "POST", data: { chat_id: chat_id, text: SendContent } });
      alert("Muvaffaqiyatli yuborildi! ✅");
      setIsPanelOpen(false);
    } catch (error) {
      alert("Xatolik! ❌");
    }
  };

  return (
    <div className="hero">
      
      {/* 1. Katta aylanuvchi matn (Marquee) */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>{t('hero.marquee_text')}</span>
          <span>{t('hero.marquee_text')}</span>
        </div>
      </div>

      {/* 2. Asosiy boshqaruvchi container */}
      <div className="container">
        
        {/* Left va Right elementlar joylashgan qator */}
        <div className="hero-content-row">
          
          {/* Chap tarafdagi matn */}
          <div className="text-content">
            <p>{t('hero.description')}</p>
          </div>

          {/* O'ng tarafdagi shoh tugmasi (Konteyner ichiga mahkamlangan) */}
          <div className="circle-toggle" onClick={() => setIsPanelOpen(true)}>
            <div className="circle-background">
              <img src={hero1} alt="AQVO Horn" className="horn-icon-img" />
            </div>
          </div>

        </div>
      </div>

      {/* 3. Eng pastdagi to'liq banner */}
      <div className="banner-bottom-full">
        <img src={hero2} alt="AQVO Products" className="products-banner-full" />
      </div>

      {/* 4. Modal forma */}
      {isPanelOpen && (
        <div className="modal-overlay" onClick={() => setIsPanelOpen(false)}>
          <div className="modal-panel-content" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="panel-close-btn" onClick={() => setIsPanelOpen(false)}>&times;</button>
            <form className="order-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" name="name" placeholder={t('hero.form.name') || "Ismingiz"} value={formData.name} onChange={handleChange} required />
                <input type="text" name="surname" placeholder={t('hero.form.surname') || "Familiyangiz"} value={formData.surname} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <input type="tel" name="phone" placeholder={t('hero.form.phone') || "Telefon raqam"} value={formData.phone} onChange={handleChange} required />
                <input type="text" name="telegram" placeholder={t('hero.form.telegram') || "Telegram"} value={formData.telegram} onChange={handleChange} />
              </div>
              <div className="form-row">
                <input type="text" name="region" placeholder={t('hero.form.region') || "Hudud"} value={formData.region} onChange={handleChange} required />
                <div className="select-wrapper">
                  <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="" disabled hidden>{t('hero.form.service') || "Xizmat turi"}</option>
                    <option value="Mahsulot">Mahsulot</option>
                    <option value="Franshiza">Franshiza</option>
                  </select>
                </div>
              </div>
              <textarea name="message" placeholder={t('hero.form.message') || "Xabar"} rows="3" value={formData.message} onChange={handleChange}></textarea>
              <button type="submit" className="form-submit-btn">{t('hero.form.submit') || "Yuborish"}</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default Hero;