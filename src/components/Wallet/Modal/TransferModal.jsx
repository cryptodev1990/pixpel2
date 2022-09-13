import React, { useState } from "react";
import Dropdown from "../Transaction/Dropdown";
import { accountList } from "../dataList";

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
              <div className="relative flex flex-col w-full max-w-3xl p-4 mx-auto bg-app-black rounded-xl shadow-lg px-6 py-6 text-lg">
                <div className="flex justify-center text-xl">
                  internal Transferson PIXPEL
                </div>
                <div
                  className={
                    reverse
                      ? "flex flex-row-reverse gap-8 items-center justify-center mb-4"
                      : "flex gap-8 items-center justify-center mb-4"
                  }
                >
                  <div className="flex flex-col gap-1 w-full">
                    <div className="text-gray-400 text-sm">
                      {accountList[0].title}
                    </div>
                    <Dropdown
                      initialContent={accountList[0].content[0].title}
                      contentList={accountList[0].content}
                    />
                  </div>
                  <div
                    className="flex h-10 w-10 rounded-full bg-app-black-button items-center justify-center mt-5 cursor-pointer active:bg-gray-500"
                    onClick={handleChange}
                  >
                    <svg
                      class="h-8 w-8 text-white"
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
                    <div className="text-gray-400 text-sm">
                      {accountList[1].title}
                    </div>
                    <Dropdown
                      initialContent={accountList[1].content[1].title}
                      contentList={accountList[1].content}
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <Dropdown initialContent="COIN"></Dropdown>
                  <div className="bg-app-black-button flex justify-between items-center py-3 px-4 w-1/2 rounded-md">
                    <div className="text-gray-400">AMOUNT</div>
                    <div className="text-blue-500">MAX</div>
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

export default TransferModal;
