import React from 'react'
import './SocialSection.css'
import {useTranslation} from "react-i18next";


function SocialSection() {
    const {t, i18n} = useTranslation('common');

    return (
        <div className="social-container" id="contact">
            <h1 className="social-heading" id="contact">{t('social.title')}</h1>
            <div className="app-store contact-app-store">
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
            <div className="social-icons">
                <div className="social-icon-link">
                    <a href="https://www.instagram.com/audienz.app/" target="_blank">
                        <img className="social-icons-img" src="../../img/instagram.png" />
                    </a>
                </div>
                <div className="social-icon-link">
                    <a href="https://www.linkedin.com/company/audienz-app/" target="_blank">
                        <img className="social-icons-img" src="../../img/linkedin.png" />
                    </a>
                </div>
                <div className="social-icon-link">
                    <a href="https://www.facebook.com/audienz.app.community" target="_blank">
                        <img className="social-icons-img" src="../../img/facebook.png" />
                    </a>
                </div>
                <div className="social-icon-link">
                    <a href="https://wa.me/4915792337848" target="_blank">
                        <img className="social-icons-img" src="../../img/whatsapp.png" />
                    </a>
                </div>
            </div>
            <div className="email-container">
                <a className="email-link" href="mailto:hello@audienz.app" target="_blank">hello@audienz.app
                </a>  
            </div> 
         </div>
    )
}

export default SocialSection
