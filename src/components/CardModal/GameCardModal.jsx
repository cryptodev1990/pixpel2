import React, { useState } from "react";
import cart from "../../asssets/images/cart.svg";
import SuccessModal from "./SuccessModal";
import { useDispatch } from "react-redux";
import { ADD_CART } from "../../actions/type";

const GameCardModal = ({ showModal, setShowModal, data }) => {
  const dispatch = useDispatch();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleCartClick = () => {
    setShowModal(false);
    dispatch({type: ADD_CART, payload: data});
  };

  const handleOpenClick = () => {
    setShowModal(false);
    setShowSuccessModal(true);
  };
  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 z-10 overflow-x-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="flex items-center px-4 py-6 min-h-screen">
            <div className="relative flex flex-col max-w-3xl mx-auto bg-app-black-modal rounded-xl shadow-lg md:px-8 py-12 text-lg">
              <div className="flex justify-between w-full items-end mb-8">
                <div className="text-2xl">CTYPTO BOTS</div>
                <div className="flex gap-3">
                  <div
                    className="bg-app-black rounded-md gap-2 flex justify-center items-center w-33 h-11 cursor-pointer"
                    onClick={handleCartClick}
                  >
                    <img src={cart} alt="cart" />
                    <div>CART</div>
                  </div>
                  <div
                    className="bg-app-black-button rounded-md flex justify-center items-center h-11 w-11 cursor-pointer"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <line x1="18" y1="6" x2="6" y2="18" />{" "}
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mb-8">
                <div className="h-15 w-15 bg-app-black rounded-md" />
                <div className="flex items-center text-gray-500 text-base w-1/2">
                  Game of bots that fight for electricity and fuel to survive
                </div>
              </div>
              <div className="mb-4">Developers</div>
              <div className="flex justify-between mb-8 gap-4">
                <div className="h-28 w-36 bg-app-black rounded-xl" />
                <div className="h-28 w-36 bg-app-black rounded-xl" />
                <div className="h-28 w-36 bg-app-black rounded-xl" />
                <div className="h-28 w-36 bg-app-black rounded-xl" />
              </div>
              <div className="mb-4">Information</div>
              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="flex px-5 py-5 justify-between bg-app-black rounded-md">
                  <div className="text-base">USERS</div>
                  <div className="text-app-blue font-semibold text-base">300,000</div>
                </div>
                <div className="px-5 py-5 flex justify-between bg-app-black rounded-md">
                  <div className="text-base">NFTS:</div>
                  <div className="text-app-blue font-semibold text-base">600,000</div>
                </div>
                <div className="px-5 py-5 flex justify-between bg-app-black rounded-md">
                  <div className="text-base">MYSTERY BOX LEFT</div>
                  <div className="text-app-blue font-semibold text-base">600</div>
                </div>
                <div className="px-5 py-5 flex justify-between bg-app-black rounded-md">
                  <div className="text-base">CRYPTO:</div>
                  <div className="text-app-blue font-semibold text-base">1,05 TUSD + 0.8%</div>
                </div>
                <div className="px-5 py-5 flex justify-between bg-app-black rounded-md">
                  <div className="text-base">PIXPEL INSURANCE:</div>
                  <div className="text-app-blue font-semibold text-base">SUPER</div>
                </div>
                <div className="px-5 py-5 flex justify-between bg-app-black rounded-md">
                  <div className="text-base">MYSTERY BOX PRICE</div>
                  <div className="text-app-blue font-semibold text-base">160 PIXP</div>
                </div>
              </div>
              <div className="bg-app-blue flex justify-center px-6 py-5 rounded-lg cursor-pointer" onClick={handleOpenClick}>OPEN MYSTERY BOX 100 TUSD</div>
            </div>
          </div>
        </div>
      ) : null}
      {
        <SuccessModal
          showModal={showSuccessModal}
          setShowModal={setShowSuccessModal}
        />
      }
    </>
  );
};

export default GameCardModal;
