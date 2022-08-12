import React from "react";
const Button = (props) => {
    let className = 'btn'
    if (props.classes) className += ` ${props.classes}`
    return (
        <button className={className}>
            {props.children}
        </button>
    )
}
export default Button