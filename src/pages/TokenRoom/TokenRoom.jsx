import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Create from "./Create";
import Supplies from "./Supplies";
import Offer from "./Offer";
import Overview from "./Overview";

const TokenRoom = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(0);
  const [temp, setTemp] = useState(<Create />);
  const handleCreateClick = () => {
    setSelect(0);
    setTemp(<Create />);
  };
  const handleSuppliesClick = () => {
    setSelect(1);
    setTemp(<Supplies />);
  };
  const handleOfferClick = () => {
    setSelect(2);
    setTemp(<Offer />);
  };
  const handleOverviewClick = () => {
    setSelect(3);
    setTemp(<Overview />);
  };
  return (
    <div className="flex flex-col 2xl:px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 px-4">
      <div className="flex justify-between items-end mb-5">
        <div
          className="flex lg:py-3 sm:py-2 py-1 lg:px-3 sm:px-2 px-1 bg-app-black-button rounded-md cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <svg
            className="md:h-5 h-4 md:w-5 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </div>
        <div className="xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-semibold">Token Room</div>
        <div />
      </div>
      <div className="flex flex-col lg:flex-row gap-3 justify-between">
        <div className="w-1/6" />
        <div className="flex flex-col lg:flex-row gap-5">
          <div
            className={
              (select === 0 ? "bg-app-blue" : "bg-app-black") +
              " px-8 py-4 flex font-medium rounded-md hover:bg-app-blue cursor-pointer"
            }
            onClick={handleCreateClick}
          >
            Create
          </div>
          <div
            className={
              (select === 1 ? "bg-app-blue" : "bg-app-black") +
              " px-8 py-4 font-medium rounded-md hover:bg-app-blue cursor-pointer"
            }
            onClick={handleSuppliesClick}
          >
            Supplies
          </div>
          <div
            className={
              (select === 2 ? "bg-app-blue" : "bg-app-black") +
              " px-8 py-4 font-medium rounded-md hover:bg-app-blue cursor-pointer"
            }
            onClick={handleOfferClick}
          >
            Offer
          </div>
          <div
            className={
              (select === 3 ? "bg-app-blue" : "bg-app-black") +
              " px-8 py-4 font-medium rounded-md hover:bg-app-blue cursor-pointer"
            }
            onClick={handleOverviewClick}
          >
            Overview
          </div>
        </div>
        <div className="bg-app-green px-8 py-4 rounded-xl cursor-pointer w-max">
          + ADD LOGO
        </div>
      </div>
      {temp}
    </div>
  );
};

export default TokenRoom;
