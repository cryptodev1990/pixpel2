import React from "react";
import DropDownButton from "../../DropDown/DropDownButton";
import TokenDropdownInput from "../../DropDown/TokenDropdownInput";

const fromTokenList = [
  {
    id: 1,
    title: "BNB",
    url: "../../assets/images/UserHome/bnb.png",
  },
  {
    id: 2,
    title: "AVA",
    url: "../../assets/images/UserHome/avax.png",
  },
  {
    id: 3,
    title: "btc",
    url: "../../assets/images/UserHome/btc.png",
  },
  {
    id: 4,
    title: "xrp",
    url: "../../assets/images/UserHome/xrp.png",
  },
];

const durationList = [
  {
    id: 1,
    title: "one week",
  },
  {
    id: 2,
    title: "one month",
  },
  {
    id: 3,
    title: "3 month",
  },
  {
    id: 4,
    title: "6 month",
  },
  {
    id: 5,
    title: "one year",
  },
];

const ListNFTModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-x-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
              <div className="relative flex flex-col w-full max-w-2xl mx-auto bg-app-black-modal rounded-xl shadow-lg md:px-12 py-12 text-lg">
                <div className="flex items-center justify-center mb-6 text-2xl">
                  List NFT AUCTION
                </div>
                <div className="text-xl mb-3">Start Price:</div>
                <TokenDropdownInput
                  initialContent={fromTokenList[0]}
                  contentList={fromTokenList}
                  Max={true}
                />
                <div className="flex text justify-end text-gray-400 mt-2">
                  USDT $2,766
                </div>
                <div className="text-xl mt-5 mb-3">Duration:</div>
                <DropDownButton
                  initialContent={durationList[0].title}
                  contentList={durationList}
                />
                <div className="flex justify-center items-center">
                  <div
                    className="px-16 py-4 cursor-pointer w-max bg-app-blue rounded-md"
                    onClick={() => setShowModal(false)}
                  >
                    Confirm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ListNFTModal;
