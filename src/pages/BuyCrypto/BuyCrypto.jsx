import React, { useEffect, useState, useRef } from "react";
import Button from "../../components/Button/Button";
import InstantCrypto from "./InstantCrypto/InstantCrypto";
import P2P from "./P2P/P2P";
import DepositFiat from "./DepositFiat/DepositFiat";
import BankSuccessCard from "./DepositFiat/BankSuccessCard";
import OrderBuy from "./OrderBuy/OrderBuy";
import OrderSell from "./OrderSell/OrderSell";
import { useAppContext } from "../../contexts/AppContext";

const buttonList = [
  {
    id: 1,
    title: "P2P",
    buttonStyle: " 1xs:w-24 h-15 w-full ",
    otherSelectedState: 5,
    anotherSelectedState: 6,
  },
  {
    id: 2,
    title: "INSTANT CRYPTO",
    buttonStyle: " 1xs:w-58 h-15 w-full ",
  },
  {
    id: 3,
    title: "DEPOSIT FIAT",
    buttonStyle: " 1xs:w-47 h-15 w-full",
    otherSelectedState: 4,
  },
];

function BuyCrypto() {
  const context = useAppContext();
  const [value, setValue] = useState([
    context.buyCryptoState,
    context.p2PState,
    context.depositState,
    context.orderBuyState,
    context.orderSellState,
  ]);

  useEffect(() => {
    setValue([
      context.buyCryptoState,
      context.p2PState,
      context.depositState,
      context.orderBuyState,
      context.orderSellState,
    ]);
  }, [
    context.buyCryptoState,
    context.p2PState,
    context.depositState,
    context.orderBuyState,
    context.orderSellState,
  ]);

  const [history, setHistory] = useState([value]);
  useEffect(() => {
    const temphistory = history;
    if (temphistory[temphistory.length - 1] === value) {
      return;
    }
    temphistory.push(value);
    setHistory(temphistory);
  }, [value]);

  const handleClick = (id) => () => {
    context.setBuyCryptoState(id);
  };

  return (
    <div
      className={
        (context.buyCryptoState === 1 ? "" : " items-center ") +
        " flex flex-col my-16"
      }
      style={{ fontFamily: "Poppins" }}
    >
      <div className="flex justify-around w-full ">
        {context.buyCryptoState !== 2 ? (
          <div
            className="flex items-center justify-center w-12 h-12 rounded-lg bg-app-black-button hover:bg-app-blue"
            onClick={() => {
              context.setBuyCryptoState(history[history.length - 2][0]);
              context.setP2PState(history[history.length - 2][1]);
              context.setDepositState(history[history.length - 2][2]);
              context.setOrderBuyState(history[history.length - 2][3]);
              context.setOrderSellState(history[history.length - 2][4]);
              history.pop();
            }}
          >
            <svg
              className="w-6 h-6 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="11" y2="18" />
              <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
          </div>
        ) : (
          <div className="w-6 h-6"></div>
        )}
        <div className="font-semibold 2xs:text-[40px] text-[30px] justify-center flex">
          Buy Crypto
        </div>
        <div className="w-6 h-6"></div>
      </div>
      <div className="flex flex-col justify-center w-full gap-2 px-10 my-5 1xs:gap-5 1xs:flex-row">
        {buttonList.map((button, idx) => {
          return (
            <div key={idx}>
              <Button
                title={button.title}
                selected={
                  context.buyCryptoState === button.id ||
                  context.buyCryptoState === button.otherSelectedState ||
                  context.buyCryptoState === button.anotherSelectedState
                }
                buttonStyle={button.buttonStyle}
                fontStyle={
                  "xs:text-xl 1xs:text-lg 2xs:text-xl text-lg font-semibold"
                }
                onClick={handleClick(button.id)}
              />
            </div>
          );
        })}
      </div>
      {context.buyCryptoState === 1 ? <P2P /> : null}
      {context.buyCryptoState === 2 ? <InstantCrypto /> : null}
      {context.buyCryptoState === 3 ? <DepositFiat /> : null}
      {context.buyCryptoState === 4 ? <BankSuccessCard /> : null}
      {context.buyCryptoState === 5 ? <OrderBuy /> : null}
      {context.buyCryptoState === 6 ? <OrderSell /> : null}
    </div>
  );
}

export default BuyCrypto;
