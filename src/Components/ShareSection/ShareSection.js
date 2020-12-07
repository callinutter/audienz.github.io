import React from 'react'
import { Button } from '../Button'
import './ShareSection.css'
import {useTranslation} from "react-i18next";
import { Container, Row, Col } from 'react-bootstrap' 


function ShareSection() {
    const {t, i18n} = useTranslation('common');

    return (
        <section className='share-section'>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <img className="circle-img" src="../../img/circle-girl.png" />
                </Col>
                <Col xs={12} md={6}>
                    <div className="share-content">
                        <h1 className="share-heading"><strong>{t('share.title')}</strong></h1>
                        <p className="share-description">{t('share.description')}</p>
                        <div className="section-btns">
                            <Button 
                            className="btns"
                            buttonStyle="btn--primary"
                            buttonSize="btn--large"
                            >{t('share.button')}</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
    )
}

export default ShareSection
