import React, { useState } from "react";

const CheckboxDropDown = ({ initialContent, contentList, clicked }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div>
      <div>
        <div
          className={
            (showDropDown ? "rounded-t-md " : "rounded-md ") +
            (clicked ? "px-4 " : "px-10 ") +
            "flex items-center gap-2 py-4 cursor-pointer bg-app-black"
          }
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <div>{initialContent}</div>
          <svg
            className="w-5 h-5"
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
        <div className="relative">
          {showDropDown ? (
            <div>
              <div
                className="fixed inset-0 w-full h-full"
                onClick={() => setShowDropDown(!showDropDown)}
              />
              <div className="inset-0">
                <div className="absolute bg-app-black flex flex-col rounded-b-md gap-2 py-3 w-max z-10">
                  {contentList.map((content, idx) => {
                    return (
                      <div key={idx} className="flex gap-2 px-3 py-1">
                        <input type="checkbox" />
                        <label className="text-base font-medium">
                          {content.title}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CheckboxDropDown;
