import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import "./SectionThree.css";

function SectionThree() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '', surname: '', phone: '', telegram: '', region: '', service: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Telegram API orqali jo'natish qismi
    alert("Ma'lumot yuborildi!");
  };

  return (
    <section className="sectionThree">
      <div className="container">
        <div className="three-left">
          <h2>{t("sectionThree.three-title")}</h2>
          <p>{t("sectionThree.three-text")}</p>
          <div className="contact-info">
            <p>Bog'lanish uchun telefon raqamlarimiz:</p>
            <p>Tel: +998957724444</p>
            <p>Tel: +998996440101</p>
          </div>
        </div>

        <div className="three-right">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input name="name" placeholder={t("sectionThree.input1")} onChange={handleChange} required />
              <input name="surname" placeholder={t("sectionThree.input2")} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input name="phone" type="number" placeholder={t("sectionThree.input3")} onChange={handleChange} required />
              <input name="telegram" placeholder={t("sectionThree.input4")} onChange={handleChange} />
            </div>
            <input name="region" placeholder={t("sectionThree.input5")} onChange={handleChange} className="full-width" required />
            
            <select name="service" onChange={handleChange}>
              <option>{t("sectionThree.service")}</option>
              <option>{t("sectionThree.service")}</option>
              <option>{t("sectionThree.service")}</option>
            </select>
            
            <textarea name="message" placeholder={t("sectionThree.message")} onChange={handleChange}></textarea>
            
            <button type="submit">{t("sectionThree.submit")}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default SectionThree;