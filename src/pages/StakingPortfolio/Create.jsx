import React, { useState } from "react";
import ImageDropDownButton from "../../components/DropDown/ImageDropDownButton";
import { FiatList } from "../../components/Crypto/dataList";
import ConfirmModal from "./ConfirmModal";

const Create = () => {
  const [locked, setLocked] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex justify-between xl:w-3/4 w-full mb-5">
          <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold">
            {locked ? "Locked" : "UnLocked"}
          </div>
          <div className="flex sm:gap-3 gap-1">
            <div className="flex flex-col items-center gap-2">
              <div
                className={
                  (locked ? "bg-app-blue" : "bg-app-black") +
                  " 2xl:px-8 xl:px-7 lg:px-6 md:px-5 sm:px-4 px-3 2xl:py-4 lg:py-3 sm:py-2 py-1 rounded-md cursor-pointer hover:bg-app-blue"
                }
                onClick={() => setLocked(true)}
              >
                <svg
                  className="xl:h-6 lg:h-5 md:h-4 sm:h-3 h-2 xl:w-6 lg:w-5 md:w-4 sm:w-3 w-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  />{" "}
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="text-gray-500 sm:text-sm text-xs">Locked</div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div
                className={
                  (locked ? "bg-app-black" : "bg-app-blue") +
                  " 2xl:px-8 xl:px-7 lg:px-6 md:px-5 sm:px-4 px-3 2xl:py-4 lg:py-3 sm:py-2 py-1 rounded-md cursor-pointer hover:bg-app-blue"
                }
                onClick={() => setLocked(false)}
              >
                <svg
                  className="xl:h-6 lg:h-5 md:h-4 sm:h-3 h-2 xl:w-6 lg:w-5 md:w-4 sm:w-2 w-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  />{" "}
                  <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                </svg>
              </div>
              <div className="text-gray-500 sm:text-sm text-xs">Unlocked</div>
            </div>
          </div>
        </div>
        <div className="bg-app-black flex flex-col lg:px-12 md:px-8 sm:px-5 px-3 lg:py-12 md:py-8 py-5 xl:w-3/4 w-full rounded-md">
          <div
            className={(locked ? "mb-4" : "mb-12") + " 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-medium"}
          >
            CREATE STAKING
          </div>
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-5 mb-5">
            <div className="flex md:gap-5 gap-2 sm:w-1/2 w-full">
              <div
                className={
                  (locked ? "bg-app-blue" : "bg-app-black-button") +
                  " lg:px-8 md:px-6 px-4 lg:py-4 md:py-3 py-2 rounded-md"
                }
              >
                LOCKED
              </div>
              <div
                className={
                  (locked ? "bg-app-black-button" : "bg-app-blue") +
                  " lg:px-8 md:px-6 px-4 lg:py-4 md:py-3 py-2 rounded-md"
                }
              >
                UNLOCKED
              </div>
            </div>
            <div className={(locked ? "" : "hidden") + " flex flex-col sm:w-1/2 w-full"}>
              <div>Token Name:</div>
              <input className="bg-app-black-button rounded lg:h-16 h-12" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-5 sm:items-center">
            <div className="sm:w-1/2 w-full mt-8">
              <ImageDropDownButton
                initialContent={FiatList[0]}
                backgroundColor={"bg-app-black-button"}
                contentList={FiatList}
              />
              <div className="flex flex-col sm:flex-row sm:gap-6 gap-4 sm:mt-9 mt-6">
                <div className="flex flex-col gap-1 sm:w-1/3 w-full">
                  <div>ARP:</div>
                  <div className="bg-app-black-button rounded-md flex justify-center py-5">
                    8%
                  </div>
                </div>
                <div className="flex flex-col gap-1 sm:w-1/3 w-full">
                  <div>Days:</div>
                  <div className="bg-app-black-button rounded-md flex justify-center py-5">
                    120
                  </div>
                </div>
                <div
                  className={
                    (locked ? "hidden" : "") + " flex flex-col gap-1 sm:w-1/3 w-full"
                  }
                >
                  <div>Early FEE:</div>
                  <div className="bg-app-black-button rounded-md flex justify-center py-5">
                    0.8%
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:w-1/2 w-full">
              <div className="text-lg mb-1">Max CAP:</div>
              <div className="flex justify-between bg-app-black-button rounded w-full py-4 px-6 mb-1">
                <div className="text-lg">200.000</div>
                <div className="text-lg">PIXP</div>
              </div>
              <div className=" flex justify-end gap-6 mb-10">
                <div className="text-gray-500 text-sm">Insurance: 1%</div>
                <div className="text-gray-500 text-sm">Lender FEE: 1%</div>
              </div>
              <div
                className="bg-app-blue flex justify-center rounded-md py-5 w-full cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                CREATE
              </div>
            </div>
          </div>
        </div>
      </div>
      {<ConfirmModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default Create;
