// Import libs
import React from 'react';
// Import styles
import 'animate.css'

const MessageModal = ({type='error', title='Modal', icon='uil uil-ban', text='Error'}) => {
    return (
        <div className={type + ' animate__animated animate__zoomIn MessageModal'}>
            <div className="MessageModal-bar">
                <span>
                    <i className={icon}></i>
                    {title}
                </span>
                <i class="close-icon uil uil-times-circle"></i>
            </div>
            <div className="MessageModal-info">
                <h2 className="tile">
                    {title}
                </h2>
                <i className={icon}></i>
                <span>{text}</span>
            </div>
            <div className="MessageModal-options">
                <button className='ok-btn'>
                    <span>
                        <i class="uil uil-check-circle"></i>
                        Aceptar
                    </span>
                </button>
                <button className='close-btn'>
                    <span>
                        <i class="close-icon uil uil-times-circle"></i>
                        Cerrar
                    </span>
                </button>
            </div>
        </div>
    );
}

export default MessageModal;