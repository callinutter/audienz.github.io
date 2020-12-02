import React from 'react'
import './Footer.css'
import {useTranslation} from "react-i18next";


function Footer() {
    const {t, i18n} = useTranslation('common');

    return (
        <div className="footer-container">
            <a className="footer-link" href="/agbs.html" target="_blank">{t('footer.text1')}</a>
            <a className="footer-link" href="/impressum.html" target="_blank">{t('footer.text2')}</a>
        </div>
    )
}

export default Footer
