import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Overview from "./Overview";
import Create from "./Create";
import Promotion from "./Promotion";
import { useAppContext } from "../../contexts/AppContext";
import { useEffect } from "react";

const StakingPortfolio = () => {
  const context = useAppContext();
  const [temp, setTemp] = useState(<Overview />);

  const handleOverviewClick = () => {
    context.setSelectStaking(0);
  };
  const handleCreateClick = () => {
    context.setSelectStaking(1);
  };
  const handlePromotionClick = () => {
    context.setSelectStaking(2);
  };

  useEffect(() => {
    switch (context.selectStaking) {
      case 0:
        setTemp(<Overview />);
        break;
      case 1:
        setTemp(<Create />);
        break;
      case 2:
        setTemp(<Promotion />);
        break;
      default:
        break;
    }
  }, [context.selectStaking]);
  const navigate = useNavigate();
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
        <div className="xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-semibold">
          STAKING PORTFOLIO
        </div>
        <div />
      </div>
      <div className="flex flex-col xs:flex-row justify-center gap-4 2xl:mb-32 xl:mb-24 lg:mb-20 md:mb-16 sm:mb-12 mb-8">
        <div
          className={
            (context.selectStaking === 0 ? "bg-app-blue" : "bg-app-black") +
            " px-8 py-4 font-medium rounded-md hover:bg-app-blue cursor-pointer"
          }
          onClick={handleOverviewClick}
        >
          Overview
        </div>
        <div
          className={
            (context.selectStaking === 1 ? "bg-app-blue" : "bg-app-black") +
            " px-8 py-4 font-medium rounded-md hover:bg-app-blue cursor-pointer"
          }
          onClick={handleCreateClick}
        >
          Create
        </div>
        <div
          className={
            (context.selectStaking === 2 ? "bg-app-blue" : "bg-app-black") +
            " px-8 py-4 font-medium rounded-md hover:bg-app-blue cursor-pointer"
          }
          onClick={handlePromotionClick}
        >
          Promotion
        </div>
      </div>
      {temp}
    </div>
  );
};

export default StakingPortfolio;
