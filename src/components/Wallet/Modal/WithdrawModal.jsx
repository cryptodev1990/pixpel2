import React, { useState } from "react";
import Dropdown from "../Transaction/Dropdown";
import { currencyList } from "../dataList";
import ModalHalfTokenButton from "../../Button/TokenButton";

const WithdrawModal = (props) => {
  const [selected, setSelected] = useState(0);
  const handleClick = (idx) => () => {
    setSelected(idx);
  };
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
              <div className="relative flex flex-col w-full max-w-lg p-4 mx-auto bg-app-black rounded-xl shadow-lg px-6 py-8 text-lg">
                <div className="flex justify-between items-center my-5">
                  <div className="flex text-xl my-3">WITHDRAW FIAT</div>
                  <div className="flex w-10 h-10 rounded-md justify-center items-center">
                    <svg
                      className="h-4 w-4 text-gray-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <line x1="18" y1="6" x2="6" y2="18" />{" "}
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                </div>
                <div className="text-sm my-2">Select currency</div>
                <div className="w-full mb-5">
                  <Dropdown
                    initialContent={currencyList[0]}
                    contentList={currencyList}
                  />
                </div>
                <div className="mb-2">Withdrawal method</div>
                <div className="flex justify-center">
                  <ModalHalfTokenButton
                    selected={selected === 0}
                    handleClick={handleClick(0)}
                    title="USD American Dollar"
                  />
                  <div className="flex flex-col gap-2">
                    <ModalHalfTokenButton
                      selected={selected === 1}
                      handleClick={handleClick(1)}
                      title="Bank Card"
                    />
                    <div className="text-gray-400 text-sm">
                      2% Fee Transaction
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default WithdrawModal;
