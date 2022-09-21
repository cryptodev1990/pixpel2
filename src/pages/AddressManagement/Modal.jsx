import React from "react";
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

export default function Modal(props) {
  return (
    <>
      {props.showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => props.setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative flex flex-col w-full max-w-lg gap-5 p-4 px-8 py-12 mx-auto text-lg shadow-lg bg-app-black rounded-xl">
                <ImageDropDownButton
                  initialContent={tokenList[0]}
                  contentList={tokenList}
                  backgroundColor=" bg-app-black-button"
                />
                <div className="flex flex-col">
                  <div>Wallet Address</div>
                  <input
                    className="h-16 pl-4 rounded-md bg-app-black-button placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                    placeholder="Enter Address Here"
                  />
                </div>
                <div className="flex flex-col">
                  <div>Network</div>
                  <input
                    className="h-16 pl-4 rounded-md bg-app-black-button placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                    placeholder="Enter Address Here"
                  />
                </div>
                <div className="flex flex-col">
                  <div>Wallet Name</div>
                  <input
                    className="h-16 pl-4 rounded-md bg-app-black-button placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                    placeholder="Enter Address Here"
                  />
                </div>
                <div className="flex items-center justify-center h-16 px-3 bg-blue-500 rounded-md mt-7 hover:cursor-pointer">
                  <div>ADD</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
