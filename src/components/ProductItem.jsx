// Import libs
import React, { useContext, useState } from 'react';
// Import context
import AppContext from '../context/AppContext';
// Import styles
import '../styles/ProductItem/ProductItem.scss'
import '../styles/ProductItem/ProductItem640.scss'

const ProductItem = ({product}) => {
    // context
    const { addToCart } = useContext(AppContext);
    // States
    const [cart, setCart] = useState([]);

    const handleAddCart = (item) => {
        addToCart(item);
    }

    const off = true

    return (
        <div className={product.off ? "off ProductItem" : "ProductItem"} onClick={console.log}>
            <picture className="ProductItem-img-container">
                <img 
                    src={product.image} 
                    alt={product.name}
                    className="ProductItem-img" 
                />
                <i className="far fa-info-circle ProductItem-Info-Icon"></i>
            </picture>
            <div className="ProductItem-info">
                <p className='ProductItem-marca'>Marca</p>
                <p className='ProductItem-name'>{product.name}</p>
                <div className="ProductItem-prices">
                    <p className='ProductItem-price'>Q. {product.price}</p>
                    { product.off ? (<p className='ProductItem-old-price'>Q. {product.price}</p>) : (null)}
                </div>
                <i className="fas fa-cart-plus ProductItem-addCart" onClick={handleAddCart} ></i>
                {/* <button className='ProductItem-detail-btn'>
                    <i className="uil uil-info-circle"></i>
                    Detail
                </button> */}
            </div>
        </div>
    );
}

export default ProductItem;