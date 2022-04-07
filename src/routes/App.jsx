import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import '../styles/global.scss'
import Layout from '../containers/Layout.jsx'
import Login from '../containers/Login.jsx'
import RecoveryPassword from '../containers/RecoveryPassword.jsx'
import Home from '../pages/Home.jsx'
import NotFound from '../pages/NotFound.jsx'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path='/recovery-password' element={<RecoveryPassword/>} />
                    <Route path='*' element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;