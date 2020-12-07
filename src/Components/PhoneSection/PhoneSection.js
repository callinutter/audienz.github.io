import React from 'react'
import { Button } from '../Button'
import './PhoneSection.css'
import {useTranslation} from "react-i18next";
import { Container, Row, Col } from 'react-bootstrap'


function PhoneSection() {
    const {t, i18n} = useTranslation('common');

    return (
        <section className="phone-section" id="the-app">
        <Container>
            <Row>
                <Col xs={12} md={4}>
                    <img className="phone-img-1" src="../../img/phone-mockup-1.png" alt="phone-1"/>
                    <p className="phone-description">{t('phone.description1')} <br />{t('phone.description2')}</p>
                </Col>
                <Col xs={12} md={4}>
                    <img className="phone-img-1" src="../../img/phone-mockup-2.png" />
                    <p className="phone-description">{t('phone.description3')} <br />{t('phone.description4')}</p>
                </Col>
                <Col xs={12} md={4}>
                <img className="phone-img-1" src="../../img/phone-mockup-3.png" />
                    <p className="phone-description">{t('phone.description5')} <br />{t('phone.description6')}</p>
                </Col>
            </Row>
            <div className="phone-btns">
                <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                >{t('phone.button')}</Button>
            </div>
        </Container>
        </section>
    )
}

export default PhoneSection
