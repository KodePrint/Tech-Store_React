import React from 'react'
import Header from '../components/Header'
import Layout from '../containers/Layout';
import ProductList from '../containers/ProductList';

const Home = () => {
    return (
        <div className="Home">
            <ProductList/>
        </div>
    );
}

export default Home;