import React from "react";
import { useSelector } from "react-redux";
import MarketCard from "./MarketCard";
import MarketSuccessCard from "./MarketSuccessCard";

const Market = () => {
  const selector =  useSelector(state => state.market);

  return (
    <>
      {selector ? <MarketSuccessCard /> : <MarketCard/>}
    </>
  )
}
  
export default Market;
  