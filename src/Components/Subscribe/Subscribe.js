import React, { useState } from 'react'
// import { Button } from '../Button'
import './Subscribe.css'
import "../Button.css";
import {useTranslation} from "react-i18next";
import { Container } from 'react-bootstrap';


const Subscribe = () => {
    const [data, setData] = useState({
        email:''
    });

    const {email} = data;

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch(
              'https://v1.nocodeapi.com/cornfedkorean/google_sheets/MhWcxmzPgWJoHkhd?tabId=Sheet1', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify([[email, new Date().toLocaleString()]])
            }
          );
          await response.json();
          setData({...data, email:''});
        //   alert('You have been added to our mailing list!');
        } catch (err) {
          console.log(err);  
        }
    };

    const {t, i18n} = useTranslation('common');

   
        return (
            <section className="subscribe-section">
            <Container>
                <h1 className="subscribe-header"><strong>{t('subscribe.title')}</strong></h1>
                <p className="subscribe-text">{t('subscribe.description')}</p>
                <form onSubmit={handleSubmit}>
                    <input 
                    className="email-input" 
                    type="email" id="email" 
                    name="email" 
                    placeholder={t('subscribe.placeholder')}
                    value={email}
                    onChange={handleChange}
                    />
                    <div className="subscribe-btn">
                        <button
                        className='btn--outline btn--medium btn'
                        type='submit'
                        >
                        {t('subscribe.button')}
                        </button>
                    </div>
                </form>
            </Container>
            </section>
        )
    }


export default Subscribe
