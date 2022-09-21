import React, { useState } from "react";
import "./AddressManagement.scss";
import Modal from "./Modal.jsx";
import ImageDropDownButton from "../../components/DropDown/ImageDropDownButton";

const tokenList = [
  {
    id: 1,
    title: "PIXP",
    url: "../../assets/images/UserHome/bnb.png",
  },
  {
    id: 2,
    title: "PIXP",
    url: "../../assets/images/UserHome/bnb.png",
  },
  {
    id: 3,
    title: "PIXP",
    url: "../../assets/images/UserHome/bnb.png",
  },
];

const coinList = [
  {
    coin: "ETH",
    address: "ndiadwqlUODWSwqo01d29bdg",
    name: "Danil_28snJJwqq",
    network: "TRON",
  },
  {
    coin: "ETH",
    address: "ndiadwqlUODWSwqo01d29bdg",
    name: "Danil_28snJJwqq",
    network: "TRON",
  },
  {
    coin: "ETH",
    address: "ndiadwqlUODWSwqo01d29bdg",
    name: "Danil_28snJJwqq",
    network: "TRON",
  },
  {
    coin: "ETH",
    address: "ndiadwqlUODWSwqo01d29bdg",
    name: "Danil_28snJJwqq",
    network: "TRON",
  },
  {
    coin: "ETH",
    address: "ndiadwqlUODWSwqo01d29bdg",
    name: "Danil_28snJJwqq",
    network: "TRON",
  },
  {
    coin: "ETH",
    address: "ndiadwqlUODWSwqo01d29bdg",
    name: "Danil_28snJJwqq",
    network: "TRON",
  },
  {
    coin: "ETH",
    address: "ndiadwqlUODWSwqo01d29bdg",
    name: "Danil_28snJJwqq",
    network: "TRON",
  },
  {
    coin: "ETH",
    address: "ndiadwqlUODWSwqo01d29bdg",
    name: "Danil_28snJJwqq",
    network: "TRON",
  },
  {
    coin: "ETH",
    address: "ndiadwqlUODWSwqo01d29bdg",
    name: "Danil_28snJJwqq",
    network: "TRON",
  },
  {
    coin: "ETH",
    address: "ndiadwqlUODWSwqo01d29bdg",
    name: "Danil_28snJJwqq",
    network: "TRON",
  },
  {
    coin: "ETH",
    address: "ndiadwqlUODWSwqo01d29bdg",
    name: "Danil_28snJJwqq",
    network: "TRON",
  },
  {
    coin: "ETH",
    address: "ndiadwqlUODWSwqo01d29bdg",
    name: "Danil_28snJJwqq",
    network: "TRON",
  },
  {
    coin: "ETH",
    address: "ndiadwqlUODWSwqo01d29bdg",
    name: "Danil_28snJJwqq",
    network: "TRON",
  },
];

const AddressManagement = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="grid grid-cols-1 gap-10 my-10 justify-items-center"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="flex flex-row justify-between w-5/6 gap-2 text-lg">
          <div className="flex flex-row items-center justify-center rounded-md bg-app-black h-14 w-44">
            <div>
              <svg
                className="w-6 h-6"
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
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </div>
            <div>Setting</div>
          </div>
          <div
            className="flex items-center justify-center px-3 bg-green-500 rounded-md h-14 w-44 hover:cursor-pointer"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <div>ADD ADDRESS</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-5/6 gap-4 lg:flex-row">
          <div className="text-2xl xs:text-3xl sm:text-4xl">
            ADDRESS MANAGEMENT
          </div>
          <div className="flex flex-col items-center gap-2 xs:flex-row">
            <div className="flex flex-row items-center gap-2">
              <div className="text-lg">Coin:</div>
              <ImageDropDownButton
                initialContent={tokenList[0]}
                contentList={tokenList}
                backgroundColor=" bg-app-black"
              />
            </div>
            <div className="flex flex-row items-center h-12 pl-4 rounded-md xs:h-14 xs:w-72 bg-app-black w-60">
              <svg
                className="w-1/6 h-4/5"
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
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
              <input
                className="w-4/5 text-xl text-white rounded-md h-3/4 bg-app-black"
                placeholder="Search"
                type="text"
                name="search"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-5/6 gap-4 text-base">
          <div className="flex">
            <div className="flex-auto text-gray-400 md:flex-auto md:w-64 xl:w-1/4 w-14">
              Coin
            </div>
            <div className="flex-auto w-64 text-gray-400 md:flex-none md:w-64 xl:w-1/4">
              Address
            </div>
            <div className="flex-auto w-40 text-gray-400 md:flex-none md:w-64 xl:w-1/4">
              Name
            </div>
            <div className="flex-auto text-gray-400 md:flex-auto md:w-64 xl:w-1/4 w-14">
              Networks
            </div>
          </div>
          {coinList.map((list, idx) => {
            return (
              <div
                key={idx}
                className={
                  (idx === coinList.length - 1
                    ? ""
                    : "border-b-2 border-app-black") +
                  " flex flex-row gap-1 pb-2"
                }
              >
                <div className="flex-auto md:flex-auto md:w-64 xl:w-1/4 w-14">
                  {list.coin}
                </div>
                <div className="flex-auto w-64 truncate md:flex-none md:w-64 xl:w-1/4">
                  {list.address}
                </div>
                <div className="flex-auto w-40 truncate md:flex-none md:w-64 xl:w-1/4">
                  {list.name}
                </div>
                <div className="flex-auto md:flex-auto md:w-64 xl:w-1/4 w-14">
                  {list.network}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {<Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};
export default AddressManagement;
