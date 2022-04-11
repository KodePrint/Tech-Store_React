// Import Libs
import React, { useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
// Import configs
import vars from '../configs/vars.js';
// Import components
import Modal from '../containers/Modal.jsx';
import Spinner from '@containers/Spinner.jsx'
import SecondaryBtn from '../components/SecondaryBtn.jsx'
import PrimaryBtn from '../components/PrimaryBtn.jsx'
// Import Custom-Hooks
// Styles
import '@styles/Login/Login.scss'
import '@styles/Login/Login640.scss'

const API = vars.apiUrlBase.development;

const Login = () => {
    // States
    const [launchModal, setLaunchModal] = useState(false)  
    const [user, setUser] = useState(null)  
    const navigate = useNavigate()
    
    // Referencias
    const form = useRef(null)

    // Handlers
    const handleLogin = async (event) => {
        event.preventDefault();
        const formData = new FormData(form.current)
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }   
    }

    return (
        <>
        { launchModal && <Modal close={false} /> }
        {/* { loading && <Spinner/> } */}
        <div className="login">
            <div className="form-container">
                <picture className="logo-container">
                    <img src="" alt="TechStore" className="logo" />
                </picture>
                <form action="/" className="form" ref={form}>
                    <div className="input-group">
                        <input 
                            className="input input-email" 
                            type="email" 
                            id="email" 
                            placeholder="Email" 
                            autoComplete="off" 
                            required
                            name="email" 
                        />
                        <i className="uil uil-at" />                  
                    </div>
                    <div className="input-group">
                        <input 
                            className="input input-password" 
                            type="password" 
                            id="password" 
                            placeholder="Password" 
                            autoComplete="off" 
                            required
                            name="password" 
                        />
                        <i className="uil uil-key-skeleton" />                  
                    </div>
                    <PrimaryBtn 
                        secondaryClass={"login-btn"} 
                        text={"Login"} 
                        iconClass={"login-icon uil uil-signin"} 
                        event={handleLogin}
                    />
                    <a className="forgot" onClick={console.log}>Forgot my password</a>
                </form>
                <SecondaryBtn 
                    scondaryClass={"signup-btn"}
                    text={"Signup"} 
                    iconClass={"uil uil-user-check"} 
                    event={() => navigate('/sign-up')}
                />
            </div>
        </div>
        </>
    );
}

export default Login;