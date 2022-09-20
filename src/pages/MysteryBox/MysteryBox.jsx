import React, { useState } from "react";
import Exclaim from "../../asssets/images/exclaimnation.svg";
import Probability from "../../components/Probability/Probability";
import NFTWithProbability from "../../components/Probability/NFTWithProbability";
import { WrappList } from "./dataList";
import AddNFT from "../../components/Probability/AddNFT";
import AddWarriorModal from "../../components/Probability/AddWarriorModal";

const MysteryBox = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="px-32 pb-80 flex flex-col">
        <div className="text-3xl font-bold">Mystery Box Logistics</div>
        <div className="flex gap-8 my-10">
          <div className="flex flex-col gap-4 w-1/2">
            <div>Price:</div>
            <div className="flex items-center justify-center bg-app-black py-4 rounded-md">
              500 PIXP
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/2">
            <div className="flex justify-between">
              <div>Total probability rate:</div>
              <img src={Exclaim} alt="help" className="w-5" />
            </div>
            <Probability percent={100} height={56} />
          </div>
        </div>
        <div className="text-5xl font-semibold my-7">Net Wrapped</div>
        <div className="grid grid-cols-5 gap-10 my-8">
          {WrappList.map((menu, idx) => {
            return (
              <NFTWithProbability
                key={idx}
                img={menu.img}
                percent={menu.percent}
                height={32}
              />
            );
          })}
          <div className="flex flex-col gap-11">
            <AddNFT
              handleClick={() => {
                setShowModal(true);
              }}
            />
            <div
              className="bg-app-blue flex justify-center items-center text-lg py-2 rounded-md w-80 cursor-pointer"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Add
            </div>
          </div>
        </div>
      </div>
      {<AddWarriorModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default MysteryBox;
