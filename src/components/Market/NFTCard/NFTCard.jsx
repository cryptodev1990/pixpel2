import React, { useState } from "react";
import help from "../../../asssets/images/help.svg";
import cart from "../../../asssets/images/cart.svg";
import { useDispatch } from "react-redux";
import CardModal from "../../CardModal/CardModal";
import { ADD_CART } from "../../../actions/type";

const NFTCard = ({ data }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-1 px-5 py-4 bg-app-black rounded-md">
        <div className="flex justify-between items-start">
          <div className="text-app-blue">2 PXIP</div>
          <div
            className="flex bg-app-black-button rounded px-2 gap-1 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <img src={help} alt="help" />
            <div className="text-gray-500 text-sm">INFO</div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={data.img} alt="NFT" className="w-44 h-28" />
        </div>
        <div className="flex justify-between items-center">
          <div>-16%</div>
          <div
            className="bg-app-black-button flex justify-center items-center rounded px-2 py-2 cursor-pointer"
            onClick={() => dispatch({ type: ADD_CART, payload: data })}
          >
            <img src={cart} alt="cart" className="w-5 h-5" />
          </div>
        </div>
      </div>
      {
        <CardModal
          showModal={showModal}
          setShowModal={setShowModal}
          data={data}
        />
      }
    </>
  );
};
export default NFTCard;
