import React from 'react'
import { Button } from '../Button'
import './ShareSection.css'
import {useTranslation} from "react-i18next";


function ShareSection() {
    const {t, i18n} = useTranslation('common');

    return (
        <div className="container-1">
            <div className="row-1">
                <div className="column-1">
                    <img className="circle-img" src="../../img/circle-girl.png" />
                </div>
                <div className="column-1">
                    <h1 className="share-heading">{t('share.title')}</h1>
                    <p className="share-description">{t('share.description')}</p>
                    <div className="section-btns">
                        <Button 
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--large"
                        >{t('share.button')}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShareSection
