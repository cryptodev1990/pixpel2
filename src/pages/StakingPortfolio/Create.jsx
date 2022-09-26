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
        <div className="flex justify-between w-3/4 mb-5">
          <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-gl font-semibold">
            {locked ? "Locked" : "UnLocked"}
          </div>
          <div className="flex gap-3">
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
              <div className="text-gray-500 text-sm">Locked</div>
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
              <div className="text-gray-500 text-sm">Unlocked</div>
            </div>
          </div>
        </div>
        <div className="bg-app-black flex flex-col px-12 py-12 w-3/4 rounded-md">
          <div
            className={(locked ? "mb-4" : "mb-12") + " text-4xl font-medium"}
          >
            CREATE STAKING
          </div>
          <div className="flex justify-between items-end gap-5 mb-5">
            <div className="flex gap-5 w-1/2">
              <div
                className={
                  (locked ? "bg-app-blue" : "bg-app-black-button") +
                  " px-8 py-4 rounded-md"
                }
              >
                LOCKED
              </div>
              <div
                className={
                  (locked ? "bg-app-black-button" : "bg-app-blue") +
                  " px-8 py-4 rounded-md"
                }
              >
                UNLOCKED
              </div>
            </div>
            <div className={(locked ? "" : "hidden") + " flex flex-col w-1/2"}>
              <div>Token Name:</div>
              <input className="bg-app-black-button rounded h-16" />
            </div>
          </div>
          <div className="flex justify-between gap-5 items-center">
            <div className="w-1/2 mt-8">
              <ImageDropDownButton
                initialContent={FiatList[0]}
                backgroundColor={"bg-app-black-button"}
                contentList={FiatList}
              />
              <div className="flex gap-6 mt-9">
                <div className="flex flex-col gap-1 w-1/3">
                  <div>ARP:</div>
                  <div className="bg-app-black-button rounded-md flex justify-center py-5">
                    8%
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-1/3">
                  <div>Days:</div>
                  <div className="bg-app-black-button rounded-md flex justify-center py-5">
                    120
                  </div>
                </div>
                <div
                  className={
                    (locked ? "hidden" : "") + " flex flex-col gap-1 w-1/3"
                  }
                >
                  <div>Early FEE:</div>
                  <div className="bg-app-black-button rounded-md flex justify-center py-5">
                    0.8%
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2">
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
