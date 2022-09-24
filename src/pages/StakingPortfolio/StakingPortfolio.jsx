import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StakingPortfolio = () => {
  const [selected, setSelected] = useState(0);

  const handleOverviewClick = () => {
    setSelected(0);
  };
  const handleCreateClick = () => {
    setSelected(1);
  };
  const handlePromotionClick = () => {
    setSelected(2);
  };
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
        <div className="text-4xl font-semibold">Staking Portfolio</div>
        <div />
      </div>
      <div className="flex justify-center gap-4">
        <div
          className={
            (selected === 0 ? "bg-app-blue" : "bg-app-black") +
            " px-8 py-4 font-medium rounded-md hover:bg-app-blue cursor-pointer"
          }
          onClick={handleOverviewClick}
        >
          Overview
        </div>
        <div
          className={
            (selected === 1 ? "bg-app-blue" : "bg-app-black") +
            " px-8 py-4 font-medium rounded-md hover:bg-app-blue cursor-pointer"
          }
          onClick={handleCreateClick}
        >
          Create
        </div>
        <div
          className={
            (selected === 2 ? "bg-app-blue" : "bg-app-black") +
            " px-8 py-4 font-medium rounded-md hover:bg-app-blue cursor-pointer"
          }
          onClick={handlePromotionClick}
        >
          Promotion
        </div>
      </div>
    </div>
  );
};

export default StakingPortfolio;
