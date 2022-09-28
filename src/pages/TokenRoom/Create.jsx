import React from "react";
import ImageDropDownButton from "../../components/DropDown/ImageDropDownButton";
import { FiatList } from "../../components/Crypto/dataList";
import DropDownButton from "../../components/DropDown/DropDownButton";
import Supplies from "../../components/TokenRoom/Supplies";
import CreateModal from "../../components/TokenRoom/CreateModal";
import { useState } from "react";

const natureList = [
  {
    id: 1,
    title: "Inflationary",
  },
  {
    id: 2,
    title: "Deflationary",
  },
];

const walletList = [
  {
    id: 1,
    title: "Swiss",
  },
  {
    id: 2,
    title: "Bank",
  },
  {
    id: 3,
    title: "Hong Kong",
  },
  {
    id: 4,
    title: "Swiss",
  },
  {
    id: 5,
    title: "Swiss",
  },
];

const divisionList = [
  {
    id: 1,
    title: 1,
  },
  {
    id: 2,
    title: 2,
  },
  {
    id: 3,
    title: 3,
  },
  {
    id: 4,
    title: 4,
  },
  {
    id: 5,
    title: 5,
  },
  {
    id: 6,
    title: 6,
  },
  {
    id: 7,
    title: 7,
  },
  {
    id: 8,
    title: 8,
  },
  {
    id: 9,
    title: 9,
  },
  {
    id: 10,
    title: 10,
  },
];

const Create = () => {
  const [locked, setLocked] = useState(true);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="2xl:mt-28 xl:mt-20 md:mt-12 sm:mt-8 mt-4">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row justify-between 2xl:gap-36 xl:gap-20 lg:gap-8 gap-4">
            <div className="bg-app-black-button lg:w-1/3 w-full xl:px-6 lg:px-4 px-2 py-4 text-lg rounded-md">
              Name:
            </div>
            <div className="lg:w-1/3 w-full bg-app-black-button flex rounded-md xl:pl-6 lg:pl-4 pl-2">
              <div className="border-r-2 border-app-gray my-3 text-lg flex items-center pr-4">
                Blockchain
              </div>
              <div className="w-full">
                <ImageDropDownButton
                  backgroundColor="bg-app-black-button"
                  initialContent={FiatList[0]}
                  contentList={FiatList}
                />
              </div>
            </div>
            <div className="bg-app-black-button flex lg:w-1/3 w-full xl:px-6 lg:px-4 px-2 py-4 text-lg rounded-md">
              Total Supply:
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between 2xl:gap-36 xl:gap-20 lg:gap-8 gap-4">
            <div className="bg-app-black-button lg:w-1/3 w-full xl:px-6 lg:px-4 px-2 py-4 text-lg rounded-md">
              ABBR:
            </div>
            <div className="lg:w-1/3 w-full bg-app-black-button flex rounded-md xl:pl-6 lg:pl-4 pl-2">
              <div className="border-r-2 border-app-gray my-3 text-lg flex items-center xs:pr-12 pr-2 ">
                Nature
              </div>
              <div className="text-gray-500 xs:mx-6 flex items-end xs:w-1/2 w-full">--</div>
              <div className="w-full">
                <DropDownButton
                  backgroundColor="bg-app-black-button"
                  initialContent=""
                  contentList={natureList}
                />
              </div>
            </div>
            <div className="lg:w-1/3 w-full flex bg-app-black-button rounded-md xl:pl-6 lg:pl-4 pl-2">
              <div className="text-lg flex items-center 2xl:w-3/4 lg:w-3/5 w-3/5">
                Supply Division
              </div>
              <div className="2xl:w-1/4 lg:w-2/5 w-2/5">
                <DropDownButton
                  initialContent="4"
                  contentList={divisionList}
                  backgroundColor="bg-app-black-button"
                  textColor={"text-app-blue"}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between 2xl:gap-36 xl:gap-20 lg:gap-8 gap-4">
            <div className="bg-app-black-button lg:w-1/3 w-full px-6 py-4 text-lg rounded-md">
              Decimals:
            </div>
            <div className="lg:w-1/3 w-full px-6 items-center flex text-xl gap-2">
              Description:
              <div className="text-gray-500 text-sm">
                A short description of your token
              </div>
            </div>
            <div className="lg:w-1/3 w-full text-4xl text-app-blue flex items-center justify-self-stretch">
              Tokens Available: 11111
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between 2xl:gap-36 xl:gap-20 lg:gap-8 gap-4">
            <div className="flex items-center lg:w-1/3 w-full text-lg px-6 py-4 bg-app-black-button rounded-md gap-1">
              Website
              <div className="text-gray-500 text-sm">(optional)</div>:
            </div>
            <div className="flex items-center lg:w-1/3 w-full text-lg px-6 py-4 bg-app-black-button rounded-md gap-1">
              Twitter
              <div className="text-gray-500 text-sm">(optional)</div>:
            </div>
            <div className="w-1/3" />
          </div>
        </div>
        <div className="mt-28 text-3xl flex justify-center font-medium mb-16">
          Supplies
        </div>
        <div className="bg-app-black py-12 px-16 gap-20 flex">
          <Supplies title="MAIN" value="1.000.000" />
          <Supplies title="RESERVE" value="1.000.000" />
          <Supplies title="VESTING" value="1.000.000" />
          <Supplies title="YIELD" value="1.000.000" />
        </div>
        <div className="my-16 flex justify-center text-3xl font-medium">
          RESERVE
        </div>
        <div className="flex justify-between gap-32 py-10 px-16 bg-app-black mb-20">
          <div className="flex flex-col w-1/3">
            <div className="mb-3">First Issue Date:</div>
            <div className="bg-app-black-button flex justify-end px-7 py-5 rounded-md text-app-blue font-medium">
              xxx
            </div>
            <div className="mt-5 mb-3">Wallet:</div>
            <DropDownButton
              initialContent=""
              contentList={walletList}
              backgroundColor="bg-app-black-button"
            />
            <div className="border-b-2 border-app-black text-3xl mt-16 mb-11 pb-1 w-max">
              Description
            </div>
            <div className="flex gap-10">
              <div className="px-7 py-4 bg-app-green rounded-lg">
                + ADD IMAGE
              </div>
              <div className="bg-app-blue rounded-lg px-7 py-4">SAVE</div>
            </div>
          </div>
          <div className="flex flex-col w-1/3">
            <div className="mb-3">First Issue Amount:</div>
            <div className="bg-app-black-button flex justify-end px-7 py-5 rounded-md text-app-blue font-medium">
              1111111111
            </div>
            <div className="mt-5 mb-3">Maximum Burn:</div>
            <div className="bg-app-black-button rounded-md h-16"></div>
          </div>
          <div className="flex flex-col w-1/3">
            <div className="mb-3">Maximum Supply:</div>
            <div className="bg-app-black-button rounded-md h-16"></div>
            <div className="mt-5 mb-3">Unlock Date:</div>
            <div className="bg-app-black-button flex justify-end px-7 py-5 rounded-md text-app-blue font-medium mb-3">
              xx/xx/xx
            </div>
            <div className="flex justify-end gap-5">
              <div className="flex flex-col gap-3 items-center justify-center">
                <div
                  className={
                    (locked ? "bg-app-blue" : "bg-app-black-button") +
                    " px-5 py-3 rounded-md cursor-pointer"
                  }
                  onClick={() => setLocked(true)}
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    />{" "}
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div className="text-gray-500 text-sm">Locked</div>
              </div>
              <div className="flex flex-col gap-3 items-center justify-center">
                <div
                  className={
                    (locked ? "bg-app-black-button" : "bg-app-blue") +
                    " px-5 py-3 rounded-md cursor-pointer"
                  }
                  onClick={() => setLocked(false)}
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    />{" "}
                    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                  </svg>
                </div>
                <div className="text-gray-500 text-sm">Unlocked</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-40">
          <div
            className="bg-app-blue px-8 py-4 cursor-pointer w-max rounded-lg"
            onClick={() => setShowModal(true)}
          >
            CREATE TOKEN
          </div>
        </div>
      </div>
      {<CreateModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default Create;
