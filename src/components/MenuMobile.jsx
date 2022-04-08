import React from 'react'
import { useState } from 'react'

import '../styles/MenuMobile/MenuMobile.scss'

const MenuMobile = () => {

    return (
            <div className="MenuMobile">
                <ul className="MenuMobile-categories">
                    <li>
                        Categories
                    </li>
                    <li>
                        <a href="">All</a>
                    </li>
                    <li>
                        <a href="">memories</a>
                    </li>
                    <li>
                        <a href="">hard disk</a>
                    </li>
                    <li>
                        <a href="">gaming</a>
                    </li>
                    <li>
                        <a href="">video</a>
                    </li>
                    <li>
                        <a href="">cell phones</a>
                    </li>
                    <li>
                        <a href="">All</a>
                    </li>
                    <li>
                        <a href="">memories</a>
                    </li>
                    <li>
                        <a href="">hard disk</a>
                    </li>
                    <li>
                        <a href="">gaming</a>
                    </li>
                    <li>
                        <a href="">video</a>
                    </li>
                    <li>
                        <a href="">cell phones</a>
                    </li><li>
                        <a href="">All</a>
                    </li>
                    <li>
                        <a href="">memories</a>
                    </li>
                    <li>
                        <a href="">hard disk</a>
                    </li>
                    <li>
                        <a href="">gaming</a>
                    </li>
                    <li>
                        <a href="">video</a>
                    </li>
                    <li>
                        <a href="">cell phones</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">My orders</a>
                    </li>
                    <li>
                        <a href="">My account</a>
                    </li>
                </ul>
                <ul className="footer">
                    <li className="email">
                        <a href="">
                            sanicThefast@techsotore.com
                        </a>
                    </li>
                    <li className="signout">
                        <a href="">sing out</a>
                    </li>
                </ul>
        </div>

    );
}

export default MenuMobile;