// Import libs
import React from 'react'
import { useState, useContext } from 'react'
// Import context
import AppContext from '../context/AppContext';
// Import components
import MenuMobile from '@components/MenuMobile'
import Menu from '@components/Menu'
// Import stayles
import '@styles/Header/Header.scss'
import '@styles/Header/Header640.scss'
import 'animate.css';
// Import images
import defaultUserIcon from '@images/user_default.png'

const Header = () => {
    // Context
    const { state } = useContext(AppContext)
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
                    <i 
                        className={
                                toggle 
                                    ? "fad fa-angle-up"
                                    : "fad fa-angle-down"}
                    ></i>
                </li>
                <li className="navbar-shopping-cart">
                <i className="fad fa-shopping-cart"></i>
                    {
                        state.cart.length > 0 
                        ? 
                            <span className="items animate__animated animate__backInLeft">{state.cart.length}</span> 
                        : 
                            null 
                    }
                </li>
            </ul>
            <Menu visible={toggle} />
        </nav>
        <MenuMobile/>
        </>
    );
}

export default Header;