import React from 'react'

const PrimaryBtn = ({secondaryClass, iconClass, text}) => {
    return (
        <button className={"primary-btn " + secondaryClass} onClick={console.log}>
            <span className="text-btn">
                <i className={iconClass} />
                {text}
            </span>
        </button>
    );
}

export default PrimaryBtn;