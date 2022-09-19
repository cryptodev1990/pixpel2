import React, { useState, useEffect } from "react";
import ModalPurchaseButton from "../../Button/ModalPurchaseButton";
import ModalHalfButton from "../../Button/ModalHalfButton";
import ModalSelectHalfButton from "../../Button/ModalSelectHalfButton";

const ConfirmationModal = (props) => {
  const [purchaseSelected, setPurchaseSelected] = useState(false);
  const handlepurchaseClick = () => {
    setPurchaseSelected(!purchaseSelected);
  };

  const handleModalClick = () => {
    props.setShowModal(false);
  };

  const [marketSelected, setMarketSelected] = useState(false);
  const handlemarketClick = () => {
    setMarketSelected(!marketSelected);
  };
  const [buySelected, setBuySelected] = useState(false);
  const handlebuyClick = () => {
    setBuySelected(!buySelected);
  };
  const [sellSelected, setSellSelected] = useState(false);
  const handlesellClick = () => {
    setSellSelected(!sellSelected);
  };
  const [selected, setSelected] = useState(false);
  const setAll = (flag) => {
    setBuySelected(flag);
    setSellSelected(flag);
    setPurchaseSelected(flag);
    setMarketSelected(flag);
  };
  const handleClick = () => {
    if (purchaseSelected && buySelected && sellSelected && marketSelected) {
      setSelected(false);
      setAll(false);
    } else {
      setSelected(true);
      setAll(true);
    }
  };
  useEffect(() => {
    setSelected(
      purchaseSelected && buySelected && sellSelected && marketSelected
    );
  }, [purchaseSelected, buySelected, sellSelected, marketSelected]);
  const pictureClassName = "rounded-full h-3 w-3 flex-none";
  const className =
    "mb-5 flex items-center justify-center w-full h-14 gap-3 rounded-md hover:bg-app-blue cursor-pointer";
  return (
    <>
      {props.showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => props.setShowModal(false)}
            ></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
              <div
                className="relative flex flex-col w-full max-w-lg p-4 mx-auto 
                            bg-app-black rounded-xl shadow-lg px-12 py-12 text-lg"
              >
                <div className="text-xl mb-3">Order confirmation reminders</div>
                <div className="mb-8 text-sm text-gray-400">
                  When the dunction enable you must reooNFT every time order is
                  suring
                </div>
                <div
                  className={
                    className +
                    (selected ? " bg-app-blue" : " bg-app-black-button")
                  }
                  onClick={handleClick}
                >
                  <div
                    className={
                      pictureClassName +
                      (selected ? " bg-app-green" : " bg-app-red")
                    }
                  ></div>
                  <div className="text-base">Select All</div>
                </div>
                <div className="flex gap-4 mb-4 flex-col xs:flex-row">
                  <ModalSelectHalfButton
                    title="Purchase NFT"
                    handleClick={handlepurchaseClick}
                    selected={purchaseSelected}
                  />
                  <ModalSelectHalfButton
                    title="Market order"
                    handleClick={handlemarketClick}
                    selected={marketSelected}
                  />
                </div>
                <div className="flex gap-4 mb-10 flex-col xs:flex-row">
                  <ModalPurchaseButton
                    title="Buy"
                    selected={buySelected}
                    handleClick={handlebuyClick}
                  />
                  <ModalPurchaseButton
                    title="Sell"
                    selected={sellSelected}
                    handleClick={handlesellClick}
                  />
                </div>
                <div className="flex mt-4 mb-10 gap-4">
                  <ModalHalfButton
                    title="Cancel"
                    handleClick={handleModalClick}
                  />
                  <ModalHalfButton
                    title="Apply"
                    handleClick={handleModalClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ConfirmationModal;
