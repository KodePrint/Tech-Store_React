import React from 'react'
import '../styles/Login.scss'

const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <picture className="logo-container">
                    <img onerror src alt="TechStore" className="logo" />
                </picture>
                
                <form action className="form">
                    <div className="input-group">
                        <input className="input input-email" type="text" id="email" placeholder="Email" autoComplete="off" required />
                    </div>
                    <div className="input-group">
                        <input className="input input-password" type="password" id="password" placeholder="Password" autoComplete="off" required />
                    </div>
                    <button type="submit" className="primary-btn password-btn">
                        <span className="text-btn">Login</span>
                    </button>
                    <a href className="forgot">Forgot my password</a>
                </form>
                <a href className="secondary-btn signup-btn">
                    <span>Signup</span>
                </a>
            </div>
        </div>
    );
}

export default Login;