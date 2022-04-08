import React from 'react';
import '../styles/Checkout/Checkout.scss'
import '../styles/Checkout/Checkout640.scss'

import OrderItem from '../components/OrderItem.jsx';

const Checkout = () => {
    return (
        <div className="Checkout">
            <div className="Checkout-container">
                <h2 className="title">
                <i className="uil uil-shopping-bag" />
                My Order
                </h2>
                <div className="Checkout-content">
                    <div className="Checkout-info">
                        <p>
                        <span className="date">05-04-2022</span>
                        <span className="total">7 articles</span>
                        </p>
                        <span className="amount">Q 560.00</span>
                    </div>

                    <OrderItem/>
                </div>
            </div>
        </div>
    );
}

export default Checkout;