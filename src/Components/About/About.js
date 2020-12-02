import React from 'react'
import './About.css'
import {useTranslation} from "react-i18next";


function About() {
    const {t, i18n} = useTranslation('common');

    return (
        <div className="about-container" id="about">
            <div className="about-row">
                <div className="about-column">
                    <h2 className="about-title">{t('about.title')}</h2>
                    <p className="about-description">{t('about.description')}</p>
                </div>
                <div className="about-column image-column">
                    <img className="about-img" src="../../img/team.png" />
                </div>
            </div>
            
        </div>
    )
}

export default About
