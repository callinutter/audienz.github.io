import React from 'react'
import './About.css'
import {useTranslation} from "react-i18next";
import { Container, Row, Col } from 'react-bootstrap'


function About() {
    const {t, i18n} = useTranslation('common');

    return (
        <section className="about-section" id="about">
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <h2 className="about-title"><strong>{t('about.title')}</strong></h2>
                        <p className="about-description">{t('about.description')}</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <img className="about-img" src="../../img/team.png" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
