import React from "react";
import { useNavigate } from "react-router-dom";

const NFTGameCard = ({ img, gameName }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-app-black w-49 h-50 gap-2 flex flex-col justify-center items-center border-app-blue border-2 cursor-pointer"
      onClick={() => navigate("/game-market")}
    >
      <img src={img} alt="Game" className="w-39 h-31" />
      <div>{gameName}</div>
    </div>
  );
};

export default NFTGameCard;
