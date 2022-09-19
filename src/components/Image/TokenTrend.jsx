import React from "react";
import MarketChart from "../MarketChart/MarketChart";

const sizeChart = {
  maxHeight: 51,
  maxWidth: 124,
  marginLeft: "auto",
};

const TokenTrend = ({ token }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <img src={token.image} alt={token.symbol} />
        <div>{token.symbol}</div>
        <div className="text-gray-500">{token.name}</div>
      </div>
      <div className="flex items-center w-1/3">{token.Price}</div>
      {token.Change > 0 ? (
        <div className="text-app-green flex items-center">{token.Change}%</div>
      ) : (
        <div className="text-app-red flex items-center">{token.Change}%</div>
      )}
      <MarketChart
        isGrowth={token.Change > 0}
        data={[0.2, 0.5, 1, 0.1, 5, 0.5, 3, 2, 1]}
        sizeChart={sizeChart}
      />
    </div>
  );
};

export default TokenTrend;
