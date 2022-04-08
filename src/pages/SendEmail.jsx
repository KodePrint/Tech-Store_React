import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import PrimaryBtn from '../components/PrimaryBtn.jsx'
import '../styles/SendEmail/SendEmail.scss'
import '../styles/SendEmail/SendEmail640.scss'

const SendEmail = () => {
    let navigate = useNavigate();

    function backLogin() {
        navigate('/login')
    }

    return (
        <div className="login">
            <div className="form-container">
                <picture className="logo-container">
                    <img src="" alt="TechStore" className="logo" />
                </picture>
                <h1 className="title">Email has been sent..!</h1>
                <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
                <figure className="img-container">
                    <i className="uil uil-envelope-check"></i>
                </figure>
                <PrimaryBtn secondaryClass={"password-btn"} text={"Back to Login"} iconClass={"uil uil-history-alt"} event={backLogin} />
                <p className="text-info">Didn't recived the email?</p>
                <a href="#" className="resend-email">Click here to <span>Resend</span></a>
            </div>
        </div>
    );
}

export default SendEmail;