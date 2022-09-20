import React from "react";
import Probability from "./Probability";

const NFTWithProbability = ({img, percent, height}) => {
  return (
    <div className="flex flex-col">
      <img src={img} alt="NFt" className="rounded-md mb-6 w-80 h-80"/>
      <div className="mb-3">Probability:</div>
      <Probability percent={percent} height={height} className="w-80" />
    </div>
  )
}

export default NFTWithProbability;