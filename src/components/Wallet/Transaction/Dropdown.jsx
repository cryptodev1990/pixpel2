import React, { useState } from "react";

const Dropdown = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedContent, setSelectedContent] = useState(props.initialContent);
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
    <div
      className={
        " bg-app-black cursor-pointer" +
        (showDropDown ? " rounded-t-md" : " rounded-md")
      }
      onClick={handleDropDown}
    >
      <div className="flex justify-between px-4 py-3 rounded-md">
        <div className="flex">
          <div className="text-base font-medium">{selectedContent}</div>
        </div>
        <div className="flex">
          <svg
            className="w-5 h-5 text-gray-700"
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
            <div className="flex flex-col bg-app-black rounded-b-md">
              {props.contentList.map((content, idx) => {
                return (
                  <div
                    key={idx}
                    className="relative flex justify-start px-5 py-3 border-b-1 border-gray-400 rounded-b-lg"
                    onClick={() => {
                      selectHandleClick(content.title);
                    }}
                  >
                    <div className="text-base font-medium hover:text-app-blue">{content.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
