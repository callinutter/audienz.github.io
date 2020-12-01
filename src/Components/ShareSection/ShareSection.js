import React from 'react'
import { Button } from '../Button'
import './ShareSection.css'

function ShareSection() {
    return (
        <div className="container-1">
            <div className="row-1">
                <div className="column-1">
                    <img className="circle-img" src="../../img/circle-girl.png" />
                </div>
                <div className="column-1">
                    <h1 className="share-heading">This is your social voice diary!</h1>
                    <p className="share-description">Share, discuss and discover the most intimate moments captured by you and the people around you.</p>
                    <div className="section-btns">
                        <Button 
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--large"
                        >Let me tell my story!</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShareSection
