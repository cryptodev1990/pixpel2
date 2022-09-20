import React, { useState } from "react";
import ButtonWithSymbol from "../../components/Button/ButtonWithSymbol";
import Row from "./Row";

const buttonList = [
  {
    id: 1,
    title: "ALL",
    content: "All NEWS",
  },
  {
    id: 2,
    title: "ACTIVITIES",
    content: "ACTIVITIES",
  },
  {
    id: 3,
    title: "TRADE",
    content: "TRADE",
  },
  {
    id: 4,
    title: "PIXEL NEWS",
    content: "PIXEL NEWS",
  },
  {
    id: 5,
    title: "SYSTEM MAIL",
    content: "SYSTEM MAIL",
  },
];

const Notification = () => {
  const [buttonId, setButtonId] = useState(1);

  const handleClick = (idx) => () => {
    setButtonId(idx);
  };

  return (
    <>
      <div
        className="flex flex-col w-full gap-8 px-5 text-white 2xs:px-10 md:justify-center md:flex-row"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="flex flex-col justify-center w-full gap-1 px-5 py-5 2xs:gap-2 md:w-81 bg-app-black rounded-xl justify-items-center md:h-90">
          {buttonList.map((button, idx) => {
            return (
              <ButtonWithSymbol
                key={idx}
                title={button.title}
                selected={buttonId === button.id}
                onClick={handleClick(button.id)}
                buttonStyle={"px-4 py-4"}
                fontStyle={"2xs:text-base text-sm 2xs:font-medium font-normal"}
              />
            );
          })}
        </div>
        <div className="flex flex-col w-full md:w-3/5">
          <div className="flex flex-row justify-between mt-2 mb-5">
            <div className="text-2xl font-normal 2xs:font-semibold 2xs:text-3xl">
              Notification
            </div>
            <div className="flex flex-row gap-1 2xs:gap-2">
              <div className="grid items-center w-8 h-full rounded-md bg-app-black justify-items-center">
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="grid items-center w-8 h-full rounded-md bg-app-black justify-items-center">
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <polyline points="3 6 5 6 21 6" />{" "}
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
                  <line x1="10" y1="11" x2="10" y2="17" />{" "}
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </div>
              <div className="grid items-center w-8 h-full rounded-md bg-app-black justify-items-center">
                <svg
                  className="w-4 h-4 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{" "}
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between pb-2 mt-5 border-b-2 border-app-black">
            <div className="w-3/4">
              <div className="flex flex-row items-center gap-4">
                <input
                  type="checkbox"
                  className="appearance-none checked:bg-blue-500"
                />
                <div className="text-lg font-semibold">
                  {buttonList[buttonId - 1].content}
                </div>
              </div>
              <div className="text-sm text-gray-500 truncate pl-9">
                You have successfully withdraw 021100757 BNB at 2022-04-23
                16:03:43(UTC). If this activity is not your own, please do not
                care about that.
              </div>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              2022-04023 11:02:43
            </div>
          </div>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <div className="flex flex-row justify-between pb-2 mt-5">
            <div className="w-3/4">
              <div className="flex flex-row items-center gap-4">
                <input
                  type="checkbox"
                  className="appearance-none checked:bg-blue-500"
                />
                <div className="text-lg font-semibold">Withdraw</div>
              </div>
              <div className="text-sm text-gray-500 truncate pl-9">
                You have successfully withdraw 021100757 BNB at 2022-04-23
                16:03:43(UTC). If this activity is not your own, please do not
                care about that.
              </div>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              2022-04023 11:02:43
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Notification;
