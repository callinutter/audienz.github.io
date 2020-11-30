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
                    <h1>This is your voice diary to share, explain, confess...</h1>
                    <p>Discover, share and discuss the most unique moments captured by the people around you.</p>
                    <div className="section-btns">
                        <Button 
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--large"
                        >Share your story now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShareSection
