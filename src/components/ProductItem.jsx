import React, { useState } from 'react';

import '../styles/ProductItem/ProductItem.scss'
import '../styles/ProductItem/ProductItem640.scss'

const ProductItem = () => {
    // States
    const [cart, setCart] = useState([]);

    // Handler
    const handleAddCart = () => {
        setCart([]);
    }

    return (
        <div className="ProductItem">
            <picture className="ProductItem-img-container">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Bike" className="ProductItem-img" />
            </picture>
            <div className="ProductItem-info">
                <div className="">
                <p>120.00</p>
                <p>Bike</p>
                </div>
                <figure onClick={handleAddCart} >
                    <i className="uil uil-shopping-cart-alt"></i>
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;