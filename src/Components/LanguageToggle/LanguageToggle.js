import React from 'react';
import './LanguageToggle.css';
import {useTranslation} from "react-i18next";


function LanguageToggle()
{
    const [t, i18n] = useTranslation('common');
    return (
        <div className="toggle-container">
            <p className="toggle-title">{t('toggle.title', {framework:'React'})}</p>
            <button className="toggle-btn" onClick={() => i18n.changeLanguage('de')}>de</button>
            <button className="toggle-btn" onClick={() => i18n.changeLanguage('en')}>en</button>
        </div>
    )
}

export default LanguageToggle
