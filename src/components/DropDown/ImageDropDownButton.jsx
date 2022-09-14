import React, { useState, useEffect } from "react";

const ImageDropDownButton = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedContent, setSelectedContent] = useState(props.initialContent);


  const handleDropDown = () => {
    if (showDropDown) {
      setShowDropDown(false);
    } else {
      setShowDropDown(true);
    }
  };
  const selectHandleClick = (content) => {
    setSelectedContent(content);
    setShowDropDown(false);
  };

  return (
    <div
      className={
        props.backgroundColor + (showDropDown ? " rounded-md" : " rounded-t-md")
      }
      onClick={handleDropDown}
    >
      <div className="flex flex-row items-center justify-between px-5 py-3 rounded-md h-14">
        <div className="flex flex-row gap-1 h-2/3">
          <img src={selectedContent.url} alt="" />
          <div className="text-base font-medium">{selectedContent.title}</div>
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
            <div
              className={props.backgroundColor + " flex flex-col rounded-b-md"}
            >
              {props.contentList.map((content, idx) => {
                return (
                  <div
                    key={idx}
                    className="relative flex flex-row items-center justify-start gap-1 px-5 py-3"
                    onClick={() => {
                      selectHandleClick(content);
                    }}
                  >
                    <img className="h-6" src={content.url} alt="" />
                    <div className="text-base font-medium">{content.title}</div>
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

export default ImageDropDownButton;
