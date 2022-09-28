import React, {useState} from "react";
import OrderConfirm from "./OrderConfirm";
import OrderCompleted from "./OrderCompleted";
import ReleaseAssets from "./ReleaseAssets";
import { useAppContext } from "../../../contexts/AppContext";

const OrderBuy = () => {
  const context = useAppContext();
  return(
    <>
      {context.orderBuyState === 0 ? <OrderConfirm/> : null}
      {context.orderBuyState === 1 ? <OrderCompleted/> : null}
      {context.orderBuyState === 2 ? <ReleaseAssets /> : null}
    </>
  )
}

export default OrderBuy;