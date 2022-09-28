import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
import vector from "../../asssets/images/vector.svg";
import vectorBlue from "../../asssets/images/vector-blue.svg";

const Trade = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  const context = useAppContext();

  return (
    <div
      className="cursor-pointer"
      onClick={() => setShowDropDown(!showDropDown)}
    >
      <div className={"flex px-5 gap-1 items-center justify-between"}>
        <div className={context.developerHeader === 2 ? "text-app-blue " : ""}>
          Trade
        </div>
        <img
          src={context.developerHeader === 2 ? vectorBlue : vector}
          alt="vector"
        />
      </div>
      <div className="relative">
        {showDropDown ? (
          <div className="absolute inset-8 left-1 z-10">
            <div
              className="fixed inset-0 w-full h-full"
              onClick={() => setShowDropDown(!showDropDown)}
            />
            <div className="flex flex-col rounded-b-md bg-app-black text-lg w-max">
              <div
                className="relative flex justify-start px-5 border-b-2 border-app-black py-1 hover:text-app-blue"
                onClick={() => {
                  navigate("/swap-master");
                  context.setDeveloperHeader(2);
                }}
              >
                Swap
              </div>
              <div
                className="relative flex justify-start px-5 py-1 hover:text-app-blue"
                onClick={() => {
                  navigate("/exchange");
                  context.setDeveloperHeader(2);
                }}
              >
                CEX
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Trade;
