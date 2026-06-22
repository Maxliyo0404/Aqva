import "./App.css";
import React from 'react'
import Header from "./Components/Header/Header";
import Hero from "./Components/Main/Hero/Hero";
import SectionOne from "./Components/Main/SectionOne/SectionOne";
import SectionTwo from "./Components/Main/SectionTwo/SectionTwo";
import SectionThree from "./Components/Main/SectionThree/SectionThree";
import SectionFour from "./Components/SectionFour/SectionFour";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <Footer/>
    </>
  )
}

export default App