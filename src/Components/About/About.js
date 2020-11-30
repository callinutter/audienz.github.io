import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about-container" id="about">
            <div className="about-row">
                <div className="about-column">
                    <h2 className="about-title">TELL EVERY STORY</h2>
                    <p className="about-description">Hi, we are Pauline & Florian, the founders of audienz.app. 
                    In our 10 years of friendship we experienced hundreds of beautiful moments together. The sad fact is, that most of these great stories are forgotten and overwritten by the amazing chaos of life -
                    lost in the illions of pictures and texts we exchange every day. But how was it really? How did it feel? On audienz.app we let you easily collect all the memories as you would tell them.</p>
                </div>
                <div className="about-column">
                    <img className="about-img" src="../../img/team.png" />
                </div>
            </div>
            
        </div>
    )
}

export default About
