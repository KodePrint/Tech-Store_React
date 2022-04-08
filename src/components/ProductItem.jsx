import React from 'react';

import '../styles/ProductItem/ProductItem.scss'
import '../styles/ProductItem/ProductItem640.scss'

const ProductItem = () => {
    return (
        <div className="product-card">
            <picture className="product-img-container">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Bike" className="product-img" />
            </picture>
            <div className="product-info">
                <div className>
                <p>120.00</p>
                <p>Bike</p>
                </div>
                <figure>
                <img src="./assets/icons/cart.png" alt="add_to_cart" />
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;