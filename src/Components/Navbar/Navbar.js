import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link'
import "./Navbar.css";
import {useTranslation} from "react-i18next";
import LanguageToggle from '../LanguageToggle/LanguageToggle';



function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []); 

    window.addEventListener("resize", showButton);

    const {t, i18n} = useTranslation(['common']);

    return (
      <>
        <nav className="navbar">
            <div className="navbar-container">
                <NavHashLink smooth to="#top" className="navbar-logo" onClick={closeMobileMenu}>
                    <img className="navbar-logo" src="../../img/audienz-logo.png" alt="audienz-logo" />
                </NavHashLink>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavHashLink smooth to="./PhoneSection#the-app" className="nav-links" onClick={closeMobileMenu} offset={-80}>
                            {t('navbar.title1')}
                        </NavHashLink>
                    </li>
                    <li className="nav-item">
                        <NavHashLink smooth to="./About#about" className="nav-links" onClick={closeMobileMenu} offset={-80}>
                            {t('navbar.title2')}
                        </NavHashLink>
                    </li>
                    <li className="nav-item">
                        <NavHashLink smooth to="./SocialSection#contact" className="nav-links" onClick={closeMobileMenu} offset={-80}>
                             {t('navbar.title3')}
                        </NavHashLink>
                    </li>
                </ul>
                <LanguageToggle />
            </div>
        </nav>
      </>
    )
}

export default Navbar;