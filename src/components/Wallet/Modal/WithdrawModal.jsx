import React, { useState } from "react";
import Dropdown from "../Transaction/Dropdown";
import { currencyList } from "../dataList";
import ModalHalfTokenButton from "../../Button/ModalHalfTokenButton";

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
              <div className="relative flex flex-col w-full max-w-xl p-4 mx-auto bg-app-black-modal rounded-xl shadow-lg px-6 py-6 text-lg">
                <div className="flex justify-between items-center my-3">
                  <div className="flex text-2xl my-3">WITHDRAW FIAT</div>
                  <div
                    className="flex w-10 h-10 bg-app-black-select rounded-md justify-center items-center cursor-pointer"
                    onClick={() => props.setShowModal(false)}
                  >
                    <svg
                      className="h-6 w-6 text-gray-400"
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
                <div className="text-base my-2">Select currency</div>
                <div className="w-full mb-5">
                  <Dropdown
                    initialContent={currencyList[0].title}
                    contentList={currencyList}
                  />
                </div>
                <div className="mb-2 text-base">Withdrawal method</div>
                <div className="flex gap-3">
                  <div className="w-1/2">
                    <ModalHalfTokenButton
                      selected={selected === 0}
                      handleClick={handleClick(0)}
                      title="USD American Dollar"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <ModalHalfTokenButton
                      selected={selected === 1}
                      handleClick={handleClick(1)}
                      title="Bank Card"
                    />
                    <div className="flex text-gray-400 text-sm justify-center">
                      2% Fee Transaction
                    </div>
                  </div>
                </div>
                <div
                  className="flex w-full justify-center items-center bg-app-blue cursor-pointer py-3 rounded-md my-6"
                  onClick={() => props.setShowModal(false)}
                >
                  CONTINUE
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
