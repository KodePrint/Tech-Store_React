import React from 'react';

const ProductInfo = () => {
    return (
        <>
        <figure>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Bike" className="product-img" />
        </figure>
        <div className="product-info">
            <p>Q 120.00</p>
            <p>Bike</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, cum? Nihil cumque et ad eaque quos odio laboriosam dolorum praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, maiores?</p>
            <button className="primary-btn">
                <span className="text-btn">
                    <i className="cart uil uil-shopping-cart-alt">
                    <i className="plus-add uil uil-plus" />
                    </i>
                    Add to cart
                </span>
            </button>
        </div>
        </>
    );
}

export default ProductInfo;