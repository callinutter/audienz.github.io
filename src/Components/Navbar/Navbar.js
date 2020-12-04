import React, {useState, useEffect} from 'react';
import { NavHashLink } from 'react-router-hash-link'
import "./Navbar.css";
import {useTranslation} from "react-i18next";
import LanguageToggle from '../LanguageToggle/LanguageToggle';



function Navbar() {

    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    // }, []); 

    // window.addEventListener("resize", showButton);

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    const {t} = useTranslation(['common']);

    return (
      <>
        <nav 
        className={navbar ? 'navbar active' : 'navbar'}>
            <div className={navbar ? 'navbar-container active' : 'navbar-container'}>
                <NavHashLink smooth to="#top" className="navbar-logo" onClick={closeMobileMenu}>
                    <img className="navbar-logo" src="../../img/audienz-logo.png" alt="audienz-logo" />
                </NavHashLink>
                <div className={navbar ? 'menu-icon active' : 'menu-icon'} onClick={handleClick}>
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
                    <li className={navbar ? 'nav-item toggle-item active' : 'nav-item toggle-item'}>
                        <LanguageToggle  className="nav-links" onClick={closeMobileMenu} offset={-80} />
                    </li>
                </ul>
                
            </div>
        </nav>
      </>
    )
}

export default Navbar;