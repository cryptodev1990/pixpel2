import React, { useState } from "react";
import { Button } from "../../../components";
import BNB from "../../../asssets/images/UserHome/bnb.png";
import BTC from "../../../asssets/images/UserHome/btc.png";
import { useAppContext } from "../../../contexts/AppContext";

const BuyList = () => {
  const [showBuyBTC, setShowBuyBTC] = useState(false);
  const context = useAppContext();
  return (
    <div className="flex flex-col w-full mb-5">
      <div className="flex flex-row pb-2 text-lg border-b-2 border-gray-500 md:w-full shrink-0 w-160">
        <div className="w-1/6">CerstKon</div>
        <div className="w-1/6 xl:w-1/4">30,000 MXN</div>
        <div className="flex flex-row w-1/3 xl:w-1/4">
          <div className="flex flex-col w-24 lg:w-1/3 shrink-0">
            <div className="text-gray-500">Available</div>
            <div className="text-gray-500">Limit</div>
          </div>
          <div className="flex flex-col w-2/3">
            <div>2 BTC</div>
            <div>30,000 MXN</div>
          </div>
        </div>
        <div className="w-1/4">HSBC, STP, BBVA, Banorte</div>
        <div className="flex justify-end w-20 lg:w-1/12 shrink-0">
          <Button
            title={"Buy BTC"}
            buttonStyle={" w-28 h-14 bg-green-400"}
            onClick={() => {
              setShowBuyBTC(true);
            }}
          />
        </div>
      </div>

      {showBuyBTC ? (
        <div className="flex flex-col justify-center gap-5 mt-10 2md:flex-row">
          <div className="flex p-10 text-gray-500 md:w-full 2md:w-1/2 rounded-xl bg-app-black h-max w-160">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            sit mauris volutpat lorem egestas ullamcorper. Volutpat sed
            sollicitudin lacus viverra phasellus feugiat augue facilisis. Elit
            turpis bibendum amet auctor interdum et amet sed facilisi. Neque,
            sed nec donec nam lorem pellentesque enim aliquam dui. Aliquam ut
            viverra egestas quis id dictumst. Non diam erat tristique amet, est.
            Morbi massa fusce urna et dignissim. Lorem ac phasellus donec sem.
            Enim, ut hac nulla amet. Sed a adipiscing lectus in congue purus
            gravida. Nisl nibh aliquam eget morbi tempus. Enim neque, ut et nisl
            egestas condimentum.
          </div>
          <div className="flex flex-col p-10 md:w-full 2md:w-1/2 rounded-xl bg-app-black h-max w-160">
            <div className="mb-2">Buy:</div>
            <div className="flex flex-row items-center w-full h-16 mb-10 rounded-md bg-app-black-button">
              <div className="flex-none">
                <div className="rounded-md bg-app-black-button">
                  <div className="flex flex-row h-16 px-5 py-5">
                    <div className="flex flex-row">
                      <img src={BNB} alt="" />
                      <div className="mx-1 text-base font-medium">PIXP</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <svg
                  className="w-10 h-10 -ml-5 text-gray-500"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                </svg>
              </div>
              <div className="flex-auto">
                <input className="w-full bg-app-black-button" />
              </div>
              <div className="flex mx-5 text-blue-500">Max</div>
            </div>
            <div className="mb-2">Receive:</div>
            <div className="flex flex-row items-center w-full h-16 mb-10 rounded-md bg-app-black-button">
              <div className="flex-none">
                <div className="rounded-md bg-app-black-button">
                  <div className="flex flex-row h-16 px-5 py-5">
                    <div className="flex flex-row">
                      <img src={BTC} alt="" />
                      <div className="mx-1 text-base font-medium">BTC</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <svg
                  className="w-10 h-10 -ml-5 text-gray-500"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                </svg>
              </div>
              <div className="flex-auto">84.24534536000</div>
            </div>
            <div className="flex flex-row gap-5">
              <Button
                title={"Cancel"}
                buttonStyle={"w-1/2 h-16"}
                onClick={() => {
                  setShowBuyBTC(false);
                }}
              />
              <Button
                title={"Buy BTC"}
                buttonStyle={"w-1/2 h-16 bg-green-400"}
                onClick={() => {
                  context.setBuyCryptoState(5);
                }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BuyList;
