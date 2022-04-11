// Import libs
import React from 'react'
// Import components
import ProductInfo from '../components/ProductInfo';

const ProductDetail = () => {
    return (
        <aside className="product-detail">
            <i className="close-btn uil uil-times-circle" />
            <ProductInfo/>
        </aside>
    );
}

export default ProductDetail;