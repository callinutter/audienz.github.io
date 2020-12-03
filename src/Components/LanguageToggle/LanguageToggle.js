import React from 'react';
import './LanguageToggle.css';
import {useTranslation} from "react-i18next";


function LanguageToggle()
{
    const [t, i18n] = useTranslation('common');
    return (
        <div className="toggle-container">
            <button className="toggle-btn" onClick={() => i18n.changeLanguage('de')}>🇩🇪</button>
            <p style={{color: '#fff', fontSize: '20px', alignSelf: 'center', marginRight: 10}}> | </p>
            <button className="toggle-btn" onClick={() => i18n.changeLanguage('en')}>🇬🇧</button>
        </div>
    )
}

export default LanguageToggle
