import React, { useState } from "react";

const CoinType = (props) => {
  const [clicked, setClicked] = useState(false);
  const className = "text-base cursor-pointer 2xs:text-lg 1xs:text-2xl";
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
