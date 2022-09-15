import React, { useState } from "react";
import Dropdown from "../Transaction/Dropdown";
import { accountList, coinList } from "../dataList";

const TransferModal = (props) => {
  const [reverse, setReverse] = useState(false);

  const handleChange = () => {
    setReverse(!reverse);
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
              <div className="relative flex flex-col w-full max-w-3xl p-4 mx-auto bg-app-black rounded-xl shadow-lg xs:px-6 px-2 py-6 text-lg">
                <div className="flex justify-center text-2xl my-10">
                  internal Transferson PIXPEL
                </div>
                <div className="flex my-2">
                  <div className="text-gray-400 text-sm w-5/12">
                    {accountList[0].title}
                  </div>
                  <div className="w-28"></div>
                  <div className="text-gray-400 text-sm">
                    {accountList[1].title}
                  </div>
                </div>

                <div
                  className={
                    reverse
                      ? "flex xs:flex-row-reverse flex-col-reverse xs:gap-7 gap-3 items-center justify-center mb-4"
                      : "flex xs:flex-row flex-col xs:gap-7 gap-3 items-center justify-center mb-4"
                  }
                >
                  <div className="flex flex-col gap-1 w-full">
                    <Dropdown
                      initialContent={accountList[0].content[0].title}
                      contentList={accountList[0].content}
                    />
                  </div>
                  <div
                    className="flex h-10 w-10 rounded-full bg-app-black-button items-center justify-center cursor-pointer active:bg-gray-500 flex-none"
                    onClick={handleChange}
                  >
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <Dropdown
                      initialContent={accountList[1].content[1].title}
                      contentList={accountList[1].content}
                    />
                  </div>
                </div>
                <div className="flex gap-3 flex-col xs:flex-row">
                  <div className="xs:w-1/2">
                    <Dropdown
                      initialContent="COIN"
                      contentList={coinList}
                    ></Dropdown>
                  </div>
                  <div className="bg-app-black-button flex justify-between items-center xs:w-1/2 py-2 px-4 rounded-md">
                    <div className="text-gray-400">AMOUNT</div>
                    <div className="text-blue-500">MAX</div>
                  </div>
                </div>
                <div className="text-gray-400 flex justify-end my-2 text-sm">
                  Available Amount: 50 000.000
                </div>
                <div
                  className="flex justify-center items-center w-full rounded my-3 bg-app-blue py-3 cursor-pointer"
                  onClick={() => props.setShowModal(false)}
                >
                  CONFIRM
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default TransferModal;
