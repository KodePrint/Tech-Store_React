// Import lib
import React from 'react'
// Import components
import Header from '@components/Header';

const Layout = ({children}) => {
    return (
        <div className='Layaout'>
            <Header/>
            {children}
        </div>
    );
}

export default Layout;