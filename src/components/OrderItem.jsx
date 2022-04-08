import React from 'react';

const OrderItem = () => {
    return (
        <div className="shopping-cart">
            <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Bike" className="product-img" />
            </figure>
            <p>Bike</p>
            <p className="price">Q 75.00</p>
        </div>
    );
}

export default OrderItem;