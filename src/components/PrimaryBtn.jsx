import React from 'react'

const PrimaryBtn = ({secondaryClass, iconClass, text, event}) => {
    return (
        <button className={"primary-btn " + secondaryClass} onClick={event}>
            <span className="text-btn">
                <i className={iconClass} />
                {text}
            </span>
        </button>
    );
}

export default PrimaryBtn;