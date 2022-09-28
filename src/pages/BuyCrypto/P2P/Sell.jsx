import React from "react";
import SellList from "./SellList";


const Sell = () => {
  return(
    <div className="flex flex-col overflow-x-auto">
      <SellList/>
      <SellList/>
      <SellList/>
      <SellList/>
      <SellList/>
      <SellList/>
    </div> 
  )
}

export default Sell;