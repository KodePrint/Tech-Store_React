import React from 'react'

const SecondaryBtn = ({secondaryClass, iconClass, text}) => {
    return (
        <button className={"secondary-btn " + secondaryClass} onClick={console.log}>
            <span className="text-btn">
                <i className={iconClass} />
                {text}
            </span>
        </button>
    );
}

export default SecondaryBtn;