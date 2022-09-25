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
    <div className="flex flex-col px-32">
      <div className="flex justify-between items-end mb-5">
        <div
          className="flex py-3 px-3 bg-app-black-button rounded-md cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <svg
            className="h-5 w-5"
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
        <div className="text-4xl font-semibold">STAKING PORTFOLIO</div>
        <div />
      </div>
      <div className="flex justify-center gap-4 mb-32">
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
