import React from "react";

const EveryDetail = ({type, content}) => {
  return (
    <div className="bg-app-black-button flex justify-between rounded-xl py-7 px-5 text-lg">
      <div>{type}</div>
      <div className="text-app-blue">{content}</div>
    </div>
  );
};

export default EveryDetail;
