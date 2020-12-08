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
                    <Col xs={12} sm={12} md={6} lg={7} xl={8}>
                        <h2 className="about-title"><strong>{t('about.title')}</strong></h2>
                        <p className="about-description">{t('about.description')}</p>
                       
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <img 
                        className="about-img" 
                        src="../../img/team.png"
                        alt="team-photo"
                         /> 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
