// Import libs
import React, {useState, useEffect} from 'react';
import axios from 'axios';
// Import Custom Hooks
import useGetProducts from '../hooks/useGetProducts';
// Import component
import ProductItem from '@components/ProductItem'
import Spinner from '@containers/Spinner'
// Import styles
import '../styles/ProductList/ProductList.scss'
import '../styles/ProductList/ProductList640.scss'


const ProductList = () => {

    const { products, isLoading } = useGetProducts(); //Get Products an lading
    
    return (
        <>
        { isLoading && <Spinner/> }
        <section className="main-container">
            <div className="ProductList">
                {   isLoading ? (<></>) : (
                    products.length >= 1 
                        ? 
                        (
                            products.map(product => {
                                return <ProductItem key={product.id} product={product} />
                        })) 
                        : (
                            <h1>No Products</h1>
                        )
                )
                }
            </div>
        </section>
        </>
    );
}

export default ProductList;