import React from "react";

const NFTGameCard = ({img, gameName}) => {
  return (
    <div className="bg-app-black w-49 h-50 gap-2 flex flex-col justify-center items-center border-app-blue border-2">
      <img src={img} alt="Game" className="w-39 h-31" />
      <div>{gameName}</div>
    </div>
  )
}

export default NFTGameCard;