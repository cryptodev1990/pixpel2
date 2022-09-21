import React from "react";

const Button = (props) => {
  return(
    <div className={props.buttonStyle + " flex items-center justify-center rounded-md cursor-pointer hover:bg-app-blue" + (props.selected ? " bg-app-blue": " bg-app-black-button")} 
         onClick={props.onClick}>
      <div className={props.fontStyle}>
        {props.title}
      </div>
    </div>
  )
}

export default Button;