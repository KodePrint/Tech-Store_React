import React from 'react'
import ProductList from '../containers/ProductList.jsx';

const Layout = ({children}) => {
    return (
        <div className='Layaout'>
            {children}
        </div>
    );
}

export default Layout;