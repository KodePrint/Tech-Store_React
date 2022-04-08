import React from 'react'
import { useState } from 'react'

import MenuMobile from '@components/MenuMobile.jsx'
import Menu from '@components/Menu.jsx'

import '@styles/Header/Header.scss'
import '@styles/Header/Header640.scss'

import defaultUserIcon from '@images/user_default.png'

const Header = () => {
    // Creacion de Estados
    const [openMenu, setOpenMenu] = useState(false)
    const [toggle, setToggle] = useState(false)

    // Handlers
    const handleBtnBurguer = (e) => {
        setOpenMenu(!openMenu);
    }
    const handleToggle = (e) => {
        setToggle(!toggle);
    }

    const noImgUserFound = (e) => {
        e.target.src = defaultUserIcon;
    }

    return (
        <>
        <nav className={openMenu ? "navbar open":"navbar"}>
            <div onClick={handleBtnBurguer} 
                className={openMenu ? "burguer-btn open":"burguer-btn"}>
                <span className="bar bar-1" />
                <span className="bar bar-2" />
                <span className="bar bar-3" />
            </div>
            <figure className="logo-container">
                <img src="#" alt="Logo" />
            </figure>
            <ul className="navbar-right">
                <li className="email" onClick={handleToggle}>
                    <span>sanicTheFast@techstore.com</span>
                    <figure className='user-img'>
                        <img src="" alt='img' onError={noImgUserFound}></img>
                    </figure>
                    <i className="uil uil-angle-down" />
                </li>
                <li className="navbar-shopping-cart">
                <i className="uil uil-shopping-cart-alt" />
                    <span className="items">12</span>
                </li>
            </ul>
        </nav>
        <Menu visible={toggle} />
        <MenuMobile/>
        </>
    );
}

export default Header;