import React, { useState } from "react";
import Market from "./Market";
import LiquidityCard from "./LiquidityCard";
import Limit from "./Limit";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const buttonList = [
  {
    id: 1,
    title: "Market",
    buttonStyle: "w-33 xs:h-14 h-10 1xs:px-0 px-2",
  },
  {
    id: 2,
    title: "Limit",
    buttonStyle: "w-26 xs:h-14 h-10 1xs:px-0 px-2",
  },
  {
    id: 3,
    title: "Liquidity",
    buttonStyle: "w-36 xs:h-14 h-10 1xs:px-0 px-2",
  },
];

function SwapMaster() {
  const [search, setSearch] = useSearchParams();
  const [selectedButtonId, setSelectedButtonId] = useState(1);
  const [temp, setTemp] = useState(<Market />);

  useEffect(() => {
    search.get("x") === null ? handleClick(1) : handleClick(2);
  }, [search]);
  let navigate = useNavigate();

  const handleClick = (buttonId) => {
    setSelectedButtonId(buttonId);
    switch (buttonId) {
      case 1:
        setTemp(<Market />);
        break;
      case 2:
        setTemp(<Limit />);
        break;
      case 3:
        setTemp(<LiquidityCard />);
        break;
      default:
    }
  };

  const handleClickArrow = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <div
        className="flex flex-col items-center py-12"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="flex flex-row items-center justify-around w-full mb-5">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-lg bg-app-black-button hover:bg-app-blue"
            onClick={handleClickArrow}
          >
            <svg
              className="h-6 w-6 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="11" y2="18" />
              <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
          </div>
          <div className="text-2xl  2xs:text-3xl 1xs:text-[40px]">
            Swap Master
          </div>
          <div className="w-12 h-12"></div>
        </div>
        <div className="flex flex-row justify-center w-full gap-5 mb-12 xs:font-semibold xs:text-lg px-28">
          {buttonList.map((button, idx) => {
            return (
              <Button
                key={idx}
                title={button.title}
                onClick={() => {
                  handleClick(button.id);
                }}
                buttonStyle={button.buttonStyle}
                selected={selectedButtonId === button.id}
              />
            );
          })}
        </div>
        <div className="flex w-full px-5">
          <div className="flex justify-center w-full">{temp}</div>
        </div>
      </div>
    </>
  );
}

export default SwapMaster;
