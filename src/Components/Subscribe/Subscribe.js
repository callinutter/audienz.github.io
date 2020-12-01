import React, { useState } from 'react'
// import { Button } from '../Button'
import './Subscribe.css'
import "../Button.css";


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
   
        return (
            <div className="container-2">
                <h1 className="subscribe-header">WHAT'S NEXT?</h1>
                <p className="subscribe-text">Join our newsletter to hear about the latest insights!</p>
                <form onSubmit={handleSubmit}>
                    <input 
                    className="email-input" 
                    type="email" id="email" 
                    name="email" 
                    placeholder="Your email"
                    value={email}
                    onChange={handleChange}
                    />
                    <div className="subscribe-btn">
                        <button
                        className='btn--outline btn--large btn'
                        type='submit'
                        >
                        Subscribe
                        </button>
                    </div>
                </form>
            </div>
        )
    }


export default Subscribe
