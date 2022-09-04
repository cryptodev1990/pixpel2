import React, { useEffect, useState } from "react";
import {
  TokenList,
  NFTList,
  StakingList,
  SpotList,
  FiatList,
} from "./tokenAmount";

const EstimateBalance = (props) => {
  const [tempList, SetTempList] = useState({
    title1: "",
    title2: "",
  });

  const Change = (id) => {
    let temp;
    switch (props.id) {
      case 0:
        temp = SpotList;
        break;
      case 1:
        temp = FiatList;
        break;
      case 2:
        temp = TokenList;
        break;
      case 3:
        temp = NFTList;
        break;
      case 4:
        temp = StakingList;
        break;
      default:
        break;
    }
    return temp;
  };
  useEffect(() => {
    SetTempList(Change(props.id));
  }, [props.id]);

  return (
    <div className="flex flex-col my-auto">
      <div className="text-gray-400 pt-2 text-sm">Estimate Balance</div>
      <div className="font-medium text-3xl">{tempList.title1}</div>
      <div className="text-gray-400 pt-10 text-sm">Estimate Balance</div>
      <div className="font-medium my-1 text-3xl">{tempList.title2}</div>
    </div>
  );
};

export default EstimateBalance;
