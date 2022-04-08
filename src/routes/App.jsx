import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import '../styles/global.scss'
import Layout from '../containers/Layout.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import PasswordRecovery from '../pages/PasswordRecovery.jsx'
import SendEmail from '../pages/SendEmail.jsx'
import NewPassword from '../pages/NewPassword.jsx'
import MyAccount from '../pages/MyAccount.jsx'
import CreateAccount from '../pages/CreateAccount.jsx'
import Checkout from '../pages/Checkout.jsx'
import Orders from '../pages/Orders.jsx'
import NotFound from '../pages/NotFound.jsx'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path='/password-recovery' element={<PasswordRecovery/>} />
                    <Route exact path='/send-email' element={<SendEmail/>} />
                    <Route exact path='/new-password' element={<NewPassword/>} />
                    <Route exact path='/account' element={<MyAccount/>} />
                    <Route exact path='/sign-up' element={<CreateAccount/>} />
                    <Route exact path='/checkout' element={<Checkout/>} />
                    <Route exact path='/orders' element={<Orders/>} />
                    <Route path='*' element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;