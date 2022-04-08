import React from 'react'

import '@styles/Menu/Menu.scss'

const Menu = ({visible}) => {
    return (
        <div className={ visible ? 'Menu open' : 'Menu'}>
            <ul>
                <li>
                    <a href="">
                        <i className="uil uil-shopping-bag" />
                        My orders
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="uil uil-user-circle" />
                        My account
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="uil uil-sign-out-alt" />
                        signout
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;