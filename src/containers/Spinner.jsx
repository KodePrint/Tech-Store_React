import React from 'react';

import '@styles/Spinner/Spinner.scss'

function Spinner() {
    return(
        <div className="Spinner-container">
            <div className="Spinner">
                <span className='one'></span>
                <span className='two'></span>
                <span className='trhe'></span>
                <span className='four'></span>
                <span className='five'></span>
                <span className='six'></span>
            </div>
            <span className='title'>Loading</span>
        </div>
    );
}

export default Spinner