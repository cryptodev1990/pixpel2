import React, { useEffect } from "react";

const Dropdown = ({ title, Initial }) => {
  const networkList = [
    {
      id: 1,
      title: "BSC/BNB SMART CHAIN (EBS 20)",
    },
    {
      id: 2,
      title: "BSC/BNB SMART CHAIN (EBS 20)",
    },
    {
      id: 3,
      title: "BSC/BNB SMART CHAIN (EBS 20)",
    },
    {
      id: 4,
      title: "BSC/BNB SMART CHAIN (EBS 20)",
    },
  ];

  const [showDropDown, setShowDropDown] = React.useState(false);
  const [selectedNetwork, setSelectedNetwork] = React.useState("");

  useEffect(() => {
    setSelectedNetwork(Initial);
  }, []);

  const handleDropDown = () => {
    if (showDropDown) {
      setShowDropDown(false);
    } else {
      setShowDropDown(true);
    }
  };
  const handleClick = (networkTitle) => {
    setSelectedNetwork(networkTitle);
    setShowDropDown(false);
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="text-gray-400 text-sm">{title}</div>
      <div
        className={
          " bg-app-black-button" +
          (showDropDown ? " rounded-t-md" : " rounded-md")
        }
        onClick={handleDropDown}
      >
        <div className="flex flex-row justify-between h-16 px-5 py-5 rounded-md">
          <div className="flex">
            <div className="text-base font-medium">{selectedNetwork}</div>
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
      </div>
      {showDropDown === true ? (
        <div className="flex flex-col bg-app-black-button rounded-b-md">
          {networkList.map((network, idx) => {
            return (
              <div
                key={idx}
                className="flex justify-start px-5 py-3 border-b-2 border-app-black"
                onClick={() => {
                  handleClick(network.title);
                }}
              >
                <div
                  className="fixed inset-0 w-full h-full"
                  onClick={() => setShowDropDown(false)}
                ></div>
                <div className="text-base font-medium">{network.title}</div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
