import React, { useState } from "react";
import help from "../../asssets/images/help.svg";
import SupplyModal from "./SupplyModal";

const Supplies = ({ title, value }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex flex-col w-80 h-80 py-5 px-4 bg-app-black-button rounded-md">
        <div className="flex justify-between items-center">
          <input type="checkbox" />
          <div
            className="bg-app-black-select py-2 px-3 gap-2 text-gray-400 text-sm rounded-md flex items-center cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <img src={help} className="w-4 h-4" alt="help" />
            INFO
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="text-3xl font-medium">{title}</div>
          <div className="text-xl text-app-blue">{value}</div>
        </div>
      </div>
      {<SupplyModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default Supplies;
