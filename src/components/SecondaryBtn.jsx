import React from 'react'

const SecondaryBtn = ({secondaryClass, iconClass, text, event}) => {
    return (
        <button className={"secondary-btn " + secondaryClass} onClick={event}>
            <span className="text-btn">
                <i className={iconClass} />
                {text}
            </span>
        </button>
    );
}

export default SecondaryBtn;