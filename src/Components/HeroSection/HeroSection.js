import React, {useState, useEffect} from 'react'
// import { Button } from '../Button'
import './HeroSection.css'
import "../Button.css";
import {useTranslation} from "react-i18next";
import { FaStar } from "react-icons/fa";

function HeroSection() {
    // let audio = new Audio("/sounds/teaser.mp3")

    // const start = () => {
    //     audio.play();
    // }

    // const pause = () => {
    //     audio.pause();
    // }
    // const useAudio = () => {
        const [audio] = useState(new Audio("/sounds/teaser-final.mp3"));
        const [playing, setPlaying] = useState(false);
      
        const toggle = () => setPlaying(!playing);
      
        useEffect(() => {
            playing ? audio.play() : audio.pause();
          }
        );

        const {t} = useTranslation('common');
      
    return (
        <div className="hero-container">
            <div className="row">
                <div className="column">
                    <h1 className="hero-heading">{t('heroSection.title1')} <br /> {t('heroSection.title2')}</h1>
                    <p className="hero-description">{t('heroSection.description')}</p>
                    <div className="hero-btns">
                        <button
                        className="btns hero-button btn--outline btn--large"
                        onClick={toggle} 
                        >
                        {t('heroSection.button')}
                        </button>
                    </div>
                    <div className="app-store">
                        <div className="apple-store-link">
                            <a href="https://apps.apple.com/us/app/id1516447240" target="_blank">
                                 <img className="apple-store" src="../../img/app-store.png" />
                            </a>
                        </div>
                        <div className="google-store-link">
                             <a href="https://play.google.com/store/apps/details?id=audienzapp.com" target="_blank">
                                <img className="google-store" src="../../img/google-play-store.png" />
                            </a>
                        </div>
                        <p className="stars"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><br/>
                    {t('heroSection.rate')}</p>
                    </div>
                </div>
                <div className="column phone-column-1">
                    {/* <div className="click-here">
                        <img className="right-arrow" src="../../img/right-arrow.png" />
                        <br></br>
                        <p className="audio-description">click on the image to <br /> listen 
                        to an example</p>
                    </div> */}
                    
                    <img 
                    className="phone-img" 
                    src="../../img/phone-mockup-1.png" 
                    alt="phone" />
                    
                </div>
            </div>
        </div>
    )
}

export default HeroSection;