import React, { useState } from "react";
import NFTtable from "./NFTtable";

const EachNFT = ({ content }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="flex flex-col rounded-lg">
      <div
        className={
          clicked
            ? "flex bg-app-black-button rounded-t-md w-full px-7 py-6 items-center cursor-pointer"
            : "flex bg-app-black-button rounded-md w-full px-7 py-6 items-center cursor-pointer"
        }
        onClick={handleClick}
      >
        <div className="w-1/12">
          <img
            className="w-10 h-10 rounded"
            src={content.game}
            alt="Game"
          ></img>
        </div>
        <div className="flex justify-center w-1/6">{content.quantity}</div>
        <div className="flex justify-center w-1/4">{content.valuet}</div>
        <div className="flex justify-center w-1/6">{content.startDate}</div>
        <div className="flex justify-center w-1/6">{content.earning}</div>
        <div className="flex justify-center w-1/12">{content.expenses}</div>
        <div className="flex justify-end w-1/12">
          <div className="flex rounded-md h-10 w-10 bg-app-black-select items-center justify-center">
            {clicked ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className={clicked ? "px-5 bg-app-black rounded-b-md" : "hidden"}>
        <NFTtable table={content.gameNFTList} />
      </div>
    </div>
  );
};

export default EachNFT;
