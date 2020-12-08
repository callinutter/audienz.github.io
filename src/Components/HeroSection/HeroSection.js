import React, {useState, useEffect} from 'react'
// import { Button } from '../Button'
import './HeroSection.css'
import "../Button.css";
import {useTranslation} from "react-i18next";
import { FaStar } from "react-icons/fa";
import { Container, Row, Col, Button } from 'react-bootstrap';

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
        <section className='hero-section'>
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <img className="hero-heading-img" src="../../images/audienz_ws.png" alt="audienz.app" />
                    <h1 className="hero-heading"><strong>{t('heroSection.title2')}</strong></h1>
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
                    </div>
                    <p className="stars"><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/> <span />
                    {t('heroSection.rate')}</p>
                </Col>
                <Col xs={12} md={4}>
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
                    
                </Col>
            </Row>
        </Container>
        </section>
    )
}

export default HeroSection;