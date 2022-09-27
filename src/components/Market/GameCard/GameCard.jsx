import React, { useState } from "react";
import GameCardModal from "../../CardModal/GameCardModal";
import { useDispatch } from "react-redux";
import { ADD_CART } from "../../../actions/type";
import { useNavigate } from "react-router-dom";
import cart from "../../../asssets/images/shopping-cart.svg";
import help from "../../../asssets/images/help.svg";

const GameCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex flex-col px-5 py-4 bg-app-black rounded gap-2">
        <div className="flex justify-between">
          <div
            className="bg-app-black-button flex rounded text-gray-400 text-sm font-medium px-2 py-1 cursor-pointer gap-1 items-center"
            onClick={() => dispatch({ type: ADD_CART, payload: data })}
          >
            <img src={cart} alt="cart" className="h-5 w-5" />
            ADD TO CART
          </div>
          <div
            className="bg-app-black-button flex rounded px-2 text-sm font-medium text-gray-400 py-1 cursor-pointer gap-1 items-center"
            onClick={() => setShowModal(true)}
          >
            <img src={help} alt="help" />
            INFO
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={data.img}
            alt="Game"
            className="cursor-pointer w-70 h-50"
            onClick={() => navigate("/gamelanding")}
          />
        </div>
        <div className="flex justify-between">
          <div className="font-semibold">BOXES OPENED</div>
          <div className="text-app-blue font-semibold">4K</div>
        </div>
        <div className="flex justify-between">
          <div className="font-semibold">BOXES LEFT</div>
          <div className="text-app-blue font-semibold">10K</div>
        </div>
        <div className="flex justify-between">
          <div className="font-semibold">MYSTERY BOX PRICE</div>
          <div className="text-app-blue font-semibold">10K</div>
        </div>
      </div>
      {
        <GameCardModal
          showModal={showModal}
          setShowModal={setShowModal}
          data={data}
        />
      }
    </>
  );
};
export default GameCard;
