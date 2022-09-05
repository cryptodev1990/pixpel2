import React from "react";
import SecurityButton from "../../Button/SecurityButton";
import ModalHalfButton from "../../Button/ModalHalfButton";
import ModalSelectHalfButton from "../../Button/ModalSelectHalfButton";
import { useEffect } from "react";

const ConfirmationModal = (props) => {
  const [purchaseSelected, setPurchaseSelected] = React.useState(false);
  const handlepurchaseClick = () => {
    setPurchaseSelected(!purchaseSelected);
  };
  const [marketSelected, setMarketSelected] = React.useState(false);
  const handlemarketClick = () => {
    setMarketSelected(!marketSelected);
  };
  const [buySelected, setBuySelected] = React.useState(false);
  const handlebuyClick = () => {
    setBuySelected(!buySelected);
  };
  const [sellSelected, setSellSelected] = React.useState(false);
  const handlesellClick = () => {
    setSellSelected(!sellSelected);
  };
  const [selected, setSelected] = React.useState(false);
  const handleClick = () => {
    setSelected(!selected);
  };
  useEffect(() => {
    setBuySelected(selected);
    setSellSelected(selected);
    setPurchaseSelected(selected);
    setMarketSelected(selected);
  }, [selected]);
  const pictureClassName = "rounded-full h-3 w-3";
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
                <div className="flex gap-4 mb-4">
                  <ModalSelectHalfButton
                    title="Purchase NFT"
                    onClick={handlepurchaseClick}
                    selected={purchaseSelected}
                  />
                  <ModalSelectHalfButton
                    title="Market order"
                    onClick={handlemarketClick}
                    selected={marketSelected}
                  />
                </div>
                <div className="flex gap-4 mb-10">
                  <SecurityButton
                    title="Buy"
                    selected={buySelected}
                    onClick={handlebuyClick}
                  />
                  <SecurityButton
                    title="Sell"
                    selected={sellSelected}
                    onClick={handlesellClick}
                  />
                </div>
                <div className="flex mt-4 mb-10 gap-4 w-full">
                  <ModalHalfButton title="Cancel" />
                  <ModalHalfButton title="Apply" />
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
