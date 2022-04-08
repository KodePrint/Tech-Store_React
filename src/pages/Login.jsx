import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import SecondaryBtn from '../components/SecondaryBtn.jsx'
import PrimaryBtn from '../components/PrimaryBtn.jsx'
import '../styles/Login/Login.scss'
import '../styles/Login/Login640.scss'

const Login = () => {

    const navigate = useNavigate()

    const goToSignup = () => {
        navigate('/sign-up')
    }
    const login = () => {
        alert('Intentas loguearte..?')
    }

    return (
        <div className="login">
            <div className="form-container">
                <picture className="logo-container">
                    <img src="" alt="TechStore" className="logo" />
                </picture>
                <form action="" className="form">
                    <div className="input-group">
                        <input className="input input-email" type="email" id="email" placeholder="Email" autoComplete="off" required />
                        <i className="uil uil-at" />                  
                    </div>
                    <div className="input-group">
                        <input className="input input-password" type="password" id="password" placeholder="Password" autoComplete="off" required />
                        <i className="uil uil-key-skeleton" />                  
                    </div>
                    <PrimaryBtn secondaryClass={"login-btn"} text={"Login"} iconClass={"login-icon uil uil-signin"} event={login}/>
                    <a className="forgot" onClick={console.log}>Forgot my password</a>
                </form>
                <SecondaryBtn scondaryClass={"signup-btn"}text={"Signup"} iconClass={"uil uil-user-check"} event={goToSignup}/>
            </div>
        </div>
    );
}

export default Login;