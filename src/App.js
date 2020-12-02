import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import HeroSection from './Components/HeroSection/HeroSection';
import ShareSection from './Components/ShareSection/ShareSection';
import Subscribe from './Components/Subscribe/Subscribe';
import PhoneSection from './Components/PhoneSection/PhoneSection';
import About from './Components/About/About';
import SocialSection from './Components/SocialSection/SocialSection';
import Footer from './Components/Footer/Footer';
// import {useTranslation} from "react-i18next";




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <ShareSection />
        <Subscribe />
        <PhoneSection />
        <About />
        <SocialSection />
        <Footer />
      </Router>
    </>
  );
}

export default App;