import React from 'react'
import { useState } from 'react'
import '../styles/Header/Header.scss'
import '../styles/Header/Header640.scss'

const Header = () => {
    // Creacion de Estados
    const [openMenu, setOpenMenu] = useState(false) 

    // Handlers
    const btnBurguer = (e) => {
        openMenu ? setOpenMenu(false) : setOpenMenu(true)
    }

    return (
        <nav className="navbar" onClick={btnBurguer}>
            <div className={openMenu ? "burguer-btn open":"burguer-btn"}>
                <span className="bar bar-1" />
                <span className="bar bar-2" />
                <span className="bar bar-3" />
            </div>
            <figure className="logo-container">
                <img src="#" alt="Logo" />
            </figure>
            <ul className="navbar-right">
                <li className="email">
                    <span>sanicTheFast@techstore.com</span>
                <i className="uil uil-angle-down" />
                </li>
                <li className="navbar-shopping-cart">
                <i className="uil uil-shopping-cart-alt" />
                    <span className="items">12</span>
                </li>
            </ul>
        </nav>
    );
}

export default Header;