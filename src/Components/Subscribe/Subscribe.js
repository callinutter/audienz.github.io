import React from 'react'
// import { Button } from '../Button'
import './Subscribe.css'
import "../Button.css";

function Subscribe() {
    return (
        <div className="container-2">
            <h1 className="subscribe-header">Does that sound interesting?</h1>
            <p className="subscribe-text">Join our newsletter - or follow us on social media like everyone else.</p>
            <form>
                <input className="email-input" type="email" id="email" name="email" placeholder="Your email"/>
                <div className="subscribe-btn">
                    <button
                    className='btn--outline btn--large btn'
                    type='submit'
                    >
                    Subscribe
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Subscribe
