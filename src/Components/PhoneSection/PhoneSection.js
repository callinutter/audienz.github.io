import React from 'react'
import { Button } from '../Button'
import './PhoneSection.css'

function PhoneSection() {
    return (
        <div className="phone-container" id="the-app">
            <div className="phone-row">
                <div className="phone-column">
                    <img className="phone-img-1" src="../../img/phone-1.png" alt="phone-1"/>
                    <p className="phone-description">DISCOVER <br />UNIQUE VOICESTORIES</p>
                </div>
                <div className="phone-column">
                <img className="phone-img-1" src="../../img/phone-2.png" />
                    <p className="phone-description">RECORD <br />YOUR OWN STORIES</p>
                </div>
                <div className="phone-column">
                <img className="phone-img-1" src="../../img/phone-3.png" />
                    <p className="phone-description">SHARE <br />JUST YOUR VOICE</p>
                </div>
            </div>
            <div className="phone-btns">
                <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                >Download the app now</Button>
            </div>
        </div>
    )
}

export default PhoneSection
