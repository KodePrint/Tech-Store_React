// Import libs
import React from 'react'
// Import componets
import MessageModal from '../components/MessageModal.jsx';
// Import Styles
import '@styles/Modal/Modal.scss'
import 'animate.css'

const Modal = () => {
    return (
        <div className="Modal">
            <MessageModal/>
        </div>
    );
}

export default Modal;