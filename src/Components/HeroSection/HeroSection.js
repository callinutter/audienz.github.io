import React from 'react'
import { Button } from '../Button'
import './HeroSection.css'

function HeroSection() {

    return (
        <div className="hero-container">
            <div className="row">
                <div className="column">
                    <h1 className="hero-heading">The Most Personal Stories are told without a camera.</h1>
                    <p className="hero-description">Share your best memories.</p>
                    <div className="hero-btns">
                        <Button
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                        >
                        Start Now
                        </Button>
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
                </div>
                <div className="column">
                    <div className="click-here">
                        <img className="right-arrow" src="../../img/right-arrow.png" />
                        <br></br>
                        <a href="">click here to listen <br></br>
                        to an example</a>
                    </div>
                    <img className="phone-img" src="../../img/hero-section-phone.png" alt="phone" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;