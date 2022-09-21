import React from "react";

const TokenDetail = () => {
  return (
    <div className="flex flex-col px-32 py-32">
      <div className="text-4xl font-bold mb-12">Token Details</div>
      <div className="flex gap-7">
        <div className="flex flex-col px-12 py-12 bg-app-black rounded-3xl w-1/2">
          <div className="flex flex-col gap-3 mb-8">
            <div className="text-xl">Bank #1234</div>
            <div className="flex flex-row gap-4">
              <div className="text-3xl font-bold">$2.3435</div>
              <div className="bg-app-green py-1 px-5 rounded w-max">5.7%</div>
            </div>
            <div className="flex flex-row gap-4">
              <div>0.0000005 BTC</div>
              <div className="bg-app-green py-1 px-4 w-max rounded">12.7%</div>
            </div>
            <div className="flex flex-row gap-4">
              <div>0.005 BNB</div>
              <div className="bg-app-red py-1 px-4 w-max rounded">-1.7%</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-app-black-button rounded-xl flex justify-between px-8 py-5">
              <div>Market cap:</div>
              <div className="font-medium">$31 213 241.942</div>
            </div>
            <div className="bg-app-black-button rounded-xl flex justify-between px-8 py-5">
              <div>24 hour trading vol:</div>
              <div className="font-medium">$213 241.942</div>
            </div>
            <div className="bg-app-black-button rounded-xl flex justify-between px-8 py-5">
              <div>Fully diluted caluation:</div>
              <div className="font-medium">$21 241.942</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-12 py-8 gap-4 bg-app-black rounded-3xl w-1/2">
          <div className="bg-app-black-button rounded-xl flex justify-between px-8 py-5">
            <div>All time high</div>
            <div className="font-medium">$150</div>
          </div>
          <div className="bg-app-black-button rounded-xl flex justify-between px-8 py-5">
            <div>24 hours Low/High</div>
            <div className="font-medium">2.75/3.09</div>
          </div>
          <div className="bg-app-black-button rounded-xl flex justify-between px-8 py-5">
            <div>7D Low/High</div>
            <div className="font-medium">2.75/3.09</div>
          </div>
          <div className="bg-app-black-button rounded-xl flex justify-between px-8 py-5">
            <div>Circulation supply</div>
            <div className="font-medium">$123 253.214</div>
          </div>
          <div className="bg-app-black-button rounded-xl flex justify-between px-8 py-5">
            <div>Total supply:</div>
            <div className="font-medium">$123 253.214</div>
          </div>
          <div className="bg-app-black-button rounded-xl flex justify-between px-8 py-5">
            <div>Max supply:</div>
            <div className="font-medium">$123 253.214</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDetail;
