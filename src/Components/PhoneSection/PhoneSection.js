import React from 'react'
import { Button } from '../Button'
import './PhoneSection.css'
import {useTranslation} from "react-i18next";


function PhoneSection() {
    const {t, i18n} = useTranslation('common');

    return (
        <div className="phone-container" id="the-app">
            <div className="phone-row">
                <div className="phone-column">
                    <img className="phone-img-1" src="../../img/phone-1.png" alt="phone-1"/>
                    <p className="phone-description">{t('phone.description1')} <br />{t('phone.description2')}</p>
                </div>
                <div className="phone-column">
                <img className="phone-img-1" src="../../img/phone.png" />
                    <p className="phone-description">{t('phone.description3')} <br />{t('phone.description4')}</p>
                </div>
                <div className="phone-column">
                <img className="phone-img-1" src="../../img/phone-3.png" />
                    <p className="phone-description">{t('phone.description5')} <br />{t('phone.description6')}</p>
                </div>
            </div>
            <div className="phone-btns">
                <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                >{t('phone.button')}</Button>
            </div>
        </div>
    )
}

export default PhoneSection
