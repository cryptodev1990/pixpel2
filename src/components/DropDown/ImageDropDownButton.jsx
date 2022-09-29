import React, { useState, useEffect } from "react";

const ImageDropDownButton = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedContent, setSelectedContent] = useState(props.initialContent);
  const [bgColor, setBgColor] = useState("bg-app-black");

  useEffect(() => {
    setSelectedContent(props.initialContent);
  }, [props.initialContent]);

  useEffect(() => {
    setBgColor(props.backgroundColor);
  }, [props.backgroundColor]);

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
        bgColor +
        (showDropDown ? " rounded-t-md" : " rounded-md") +
        " items-center cursor-pointer"
      }
      onClick={handleDropDown}
    >
      <div className="flex items-center justify-between px-6 py-4 rounded-md">
        <div className="flex gap-2 h-3/5 items-center">
          <img
            src={selectedContent.url}
            alt=""
            className="w-7 h-7 rounded-full"
          />
          <div className="text-base font-medium">{selectedContent.title}</div>
        </div>
        <div className="flex items-center">
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
            <div
              className={bgColor + " flex flex-col rounded-b-md"}
            >
              {props.contentList.map((content, idx) => {
                return (
                  <div
                    key={idx}
                    className="relative flex flex-row items-center justify-start gap-1 px-8 py-5"
                    onClick={() => {
                      selectHandleClick(content);
                    }}
                  >
                    <img className="h-7" src={content.url} alt="" />
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

export default ImageDropDownButton;
