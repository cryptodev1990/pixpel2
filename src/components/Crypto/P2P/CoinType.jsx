import React, { useState } from "react";

const CoinType = (props) => {
  const [clicked, setClicked] = useState(false);
  const className = "text-2xl cursor-pointer";
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div
      className={clicked ? className + " underline text-app-blue" : className}
      onClick={handleClick}
    >
      {props.title}
    </div>
  );
};

export default CoinType;
