import React, { useState } from "react";
import cart from "../../asssets/images/cart.svg";
import { purchaseList } from "../../pages/NFTMarket/dataList";
import { useDispatch } from "react-redux";
import { ADD_CART } from "../../actions/type";
import SuccessModal from "./SuccessModal";

const CardModal = ({ showModal, setShowModal, data }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const dispatch = useDispatch();

  const handleCartClick = () => {
    setShowModal(false);
    dispatch({ type: ADD_CART, payload: data });
  };

  const handleBuyClick = () => {
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
            <div className="relative flex w-full max-w-7xl mx-auto bg-app-black-modal rounded-xl shadow-lg md:px-8 py-12 text-lg gap-10">
              <div className="flex flex-col gap-7 w-2/5">
                <img
                  src={data.img}
                  alt="NFT"
                  className="w-full rounded-xl h-full"
                />
                <div
                  className="bg-app-green flex justify-center items-center rounded-lg py-5 cursor-pointer"
                  onClick={handleBuyClick}
                >
                  Buy Now
                </div>
              </div>
              <div className="flex flex-col w-3/5">
                <div className="flex justify-between w-full items-end mb-8">
                  <div className="text-2xl">H1 Hero Name for NFT</div>
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
                <div className="flex gap-2 mb-2">
                  <div className="bg-app-black-button flex justify-between items-center px-7 rounded-lg w-44 h-16">
                    <div>LEVEL</div>
                    <div className="text-app-blue">31</div>
                  </div>
                  <div className="bg-app-black-button flex justify-between items-center px-7 rounded-lg w-48 h-16">
                    <div>ATTACK</div>
                    <div className="text-app-blue">50</div>
                  </div>
                  <div className="bg-app-black-button flex justify-between items-center px-7 rounded-lg w-48 h-16">
                    <div>DEFENSE</div>
                    <div className="text-app-blue">60</div>
                  </div>
                </div>
                <div className="flex gap-2 mb-6">
                  <div className="bg-app-black-button flex justify-between items-center px-7 rounded-lg w-52 h-16">
                    <div>STEALTH</div>
                    <div className="text-app-blue">128</div>
                  </div>
                  <div className="bg-app-black-button flex justify-between items-center px-7 rounded-lg w-47 h-16">
                    <div>POWER</div>
                    <div className="text-app-blue">50</div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mb-6">
                  <div className="px-8 py-5 flex justify-between bg-app-black-button rounded-lg">
                    <div>Price</div>
                    <div className="text-app-blue font-semibold">
                      $31 213 241.942
                    </div>
                  </div>
                  <div className="px-8 py-5 flex justify-between bg-app-black-button rounded-lg">
                    <div>Item Location</div>
                    <div className="text-app-blue font-semibold">
                      Crypto Bots
                    </div>
                  </div>
                  <div className="px-8 py-5 flex justify-between bg-app-black-button rounded-lg">
                    <div>Blockchain ID</div>
                    <div className="flex gap-2">
                      <div className="text-app-blue font-semibold">
                        c47befa...18076d627f
                      </div>
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          ry="2"
                        />{" "}
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-app-black-button py-5 px-5 rounded-md">
                  <div className="text-xl">Previous Purchase</div>
                  <div className="overflow-x-auto relative mt-4 w-full">
                    <table className="table-auto">
                      <thead>
                        <tr>
                          <td className="text-gray-400 w-1/6 text-xs">Price</td>
                          <td className="text-gray-400 w-1/5 px-6 text-xs">
                            <div className="text-gray-400 w-max">USD Price</div>
                          </td>
                          <td className="text-gray-400 w-1/4 px-6 text-xs">
                            <div className="text-gray-400 w-max">
                              Floor Differnece
                            </div>
                          </td>
                          <td className="text-gray-400 w-1/6 px-6 text-xs">
                            <div className="text-gray-400 w-max">
                              Expiration
                            </div>
                          </td>
                          <td className="text-gray-400 pl-6 text-xs">From</td>
                        </tr>
                      </thead>
                      <tbody className="px-4">
                        {purchaseList.map((menu, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="py-2">
                                <div className="text-xs w-max">
                                  {menu.price}
                                </div>
                              </td>
                              <td className="px-6">
                                <div className="text-xs w-max">{menu.usd}</div>
                              </td>
                              <td className="px-6">
                                <div className="text-xs w-max">
                                  {menu.floor}
                                </div>
                              </td>
                              <td className="px-6">
                                <div className="text-xs w-max">
                                  {menu.expiration}
                                </div>
                              </td>
                              <td className="pl-6">
                                <div className="underline text-xs w-max">
                                  {menu.from}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
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

export default CardModal;
