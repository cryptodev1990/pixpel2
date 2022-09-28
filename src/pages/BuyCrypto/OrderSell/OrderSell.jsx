import OrderConfirm from "./OrderConfirm";
import OrderCompleted from "./OrderCompleted";
import { useAppContext } from "../../../contexts/AppContext";

const OrderSell = () => {
  const context = useAppContext();
  return(
    <>
      {context.orderSellState === 0 ? <OrderConfirm/> : null}
      {context.orderSellState === 1 ? <OrderCompleted/> : null}
    </>
  )
}

export default OrderSell;