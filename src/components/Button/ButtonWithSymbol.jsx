import React from "react";


const ButtonWithSymbol = (props) => {
  return(
    <div className={props.buttonStyle + " flex flex-row items-center justify-start gap-5 rounded-md cursor-pointer hover:bg-app-blue" + (props.selected ? " bg-app-blue": " bg-app-black-button")} 
         onClick={props.onClick}>
      <div className={"bg-app-black-select h-5 w-5" + (props.selected ? " rounded-full" : "")}></div>
      <div className={props.fontStyle}>
        {props.title}
      </div>
    </div>
  )
}

export default ButtonWithSymbol;