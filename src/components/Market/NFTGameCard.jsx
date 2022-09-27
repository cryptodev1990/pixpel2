import React from "react";
import { useNavigate } from "react-router-dom";

const NFTGameCard = ({ img, gameName }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-app-black gap-2 flex flex-col justify-center py-4 px-4 items-center border-app-blue border-2 cursor-pointer 3xl:mx-7 2xl:mx-4 xl:mx-4 lg:mx-3 mx-2 "
      onClick={() => navigate("/game-market")}
    >
      <img src={img} alt="Game" className="flex self-stretch" />
      <div className="flex items-center w-max">{gameName}</div>
    </div>
  );
};

export default NFTGameCard;
