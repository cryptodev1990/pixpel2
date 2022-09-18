import React, { useState } from "react";
import { useEffect } from "react";

const DropDownButton = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedContent, setSelectedContent] = useState(props.initialContent);
  const [fontSize, setFontSize] = useState("text-lg");

  useEffect(() => {
    setFontSize(props.fontSize);
  },[props.fontSize]);
  const handleDropDown = () => {
    if (showDropDown) {
      setShowDropDown(false);
    } else {
      setShowDropDown(true);
    }
  };
  const selectHandleClick = (contentTitle) => {
    setSelectedContent(contentTitle);
    setShowDropDown(false);
  };
  

  return (
    <>
      <div
        className={
          " bg-app-black cursor-pointer" +
          (showDropDown ? " rounded-t-xl" : " rounded-xl")
        }
        onClick={handleDropDown}
      >
        <div className={"flex px-8 rounded-xl gap-3 items-center justify-between py-5"}>
          <div className={fontSize + " font-medium"}>{selectedContent}</div>
          <div className="flex">
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div className="relative">
          {showDropDown === true ? (
            <div className="absolute inset-0 z-10">
              <div
                className="fixed inset-0 w-full h-full"
                onClick={handleDropDown}
              ></div>
              <div className="flex flex-col bg-app-black rounded-b-xl">
                {props.contentList.map((content, idx) => {
                  return (
                    <div
                      key={idx}
                      className="relative flex justify-start px-8 py-5"
                      onClick={() => {
                        selectHandleClick(content.title);
                      }}
                    >
                      <div className="text-base font-medium">
                        {content.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default DropDownButton;
