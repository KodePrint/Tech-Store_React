import React from 'react'
import Header from '../components/Header.jsx'
import Layout from '../containers/Layout.jsx';
import ProductList from '../containers/ProductList.jsx';

const Home = () => {
    return (
        <>
            <Header/>
            <Layout>
                <ProductList/>
            </Layout>
        </>
    );
}

export default Home;