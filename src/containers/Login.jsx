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
                        <input className="input input-email" type="email" id="email" placeholder="Email" autoComplete="off" required />
                        <i class="uil uil-at"></i>                    </div>
                    <div className="input-group">
                        <input className="input input-password" type="password" id="password" placeholder="Password" autoComplete="off" required />
                        <i class="uil uil-key-skeleton"></i>                    </div>
                    <button type="submit" className="primary-btn login-btn">
                        <span className="text-btn">
                            <i class="login-icon uil uil-signin"></i>
                            Login
                        </span>
                    </button>
                    <a href="#" className="forgot">Forgot my password</a>
                </form>
                <a href="#" className="secondary-btn signup-btn">
                    <span className='text-btn'>
                        <i class="uil uil-user-check"></i>
                        Signup
                    </span>
                </a>
            </div>
        </div>
    );
}

export default Login;