import React, { useState } from "react";
import "./AddressManagement.scss";
import Modal from "./Modal.jsx";
import BNB from "../../asssets/images/UserHome/bnb.png";
import { Header } from "../../components";

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
      <Header></Header>
      <div
        className="grid grid-cols-1 gap-10 justify-items-center mt-10"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="flex flex-row justify-between w-5/6 text-lg">
          <div className="flex flex-row bg-app-black rounded-md h-14 w-44 items-center pl-2 pr-3 justify-center">
            <div>
              <svg
                className="h-6 w-6"
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
            className="flex rounded-md items-center px-3 bg-green-500 h-14 w-44 justify-center hover:cursor-pointer"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <div>ADD ADDRESS</div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 w-5/6 justify-between items-center">
          <div className="text-2xl" style={{ fontSize: "40px" }}>
            ADDRESS MANAGEMENT
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="text-lg">Coin:</div>
            <div className="flex flex-row bg-app-black rounded-md h-14 w-36 items-center">
              <div className="flex xs:h-1/2 h-8 mx-4">
                <img src={BNB} alt="BNB" />
              </div>
              <div className="text-base ml-1">PIXP</div>
              <div>
                <svg
                  className="h-6 w-6"
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
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
            <div className="flex flex-row h-14 w-72 bg-app-black items-center rounded-md pl-4">
              <svg
                className="h-12 w-12"
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
                className="h-3/4 w-4/5 rounded-md text-white text-xl bg-app-black"
                placeholder="Search"
                type="text"
                name="search"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-5/6 gap-4 text-base">
          <div className="flex flex-row justify-between">
            <div className="w-1/4 text-gray-400">Coin</div>
            <div className="w-1/4 text-gray-400">Adress</div>
            <div className="w-1/4 text-gray-400">Name</div>
            <div className="w-1/4 text-gray-400">Networks</div>
          </div>
          {coinList.map((list, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-row border-app-black border-b-2 pb-2 gap-1 justify-between"
              >
                <div className="w-1/4 ">{list.coin}</div>
                <div className="w-1/4 truncate">{list.address}</div>
                <div className="w-1/4 truncate">{list.name}</div>
                <div className="w-1/4 ">{list.network}</div>
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
