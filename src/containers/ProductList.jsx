import React from 'react';

import ProductItem from '../components/ProductItem.jsx'
import '../styles/ProductList/ProductList.scss'
import '../styles/ProductList/ProductList640.scss'

const ProductList = () => {
    return (
        <section className="main-container">
            <div className="ProductList">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </section>
    );
}

export default ProductList;