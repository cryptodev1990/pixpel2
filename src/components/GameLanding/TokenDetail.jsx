import React from "react";

const TokenDetail = () => {
  return (
    <div className="flex flex-col 2xl:px-32 xl:px-24 lg:px-16 md:px-8 px-3 2xl:py-24 xl:py-20 lg:py-16 md:py-12 sm:py-9 py-5 2xl:gap-12 xl:gap-10 lg:gap-8 md:gap-6 sm:gap-4 gap-2">
      <div className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-bold">
        Token Details
      </div>
      <div className="flex lg:flex-row flex-col gap-7">
        <div className="flex flex-col md:px-12 md:py-12 sm:px-8 sm:py-8 px-2 py-4 bg-app-black rounded-3xl lg:w-1/2 w-full">
          <div className="flex flex-col gap-3 mb-8">
            <div className="text-xl">Bank #1234</div>
            <div className="flex flex-row gap-4">
              <div className="text-3xl font-bold">$2.3435</div>
              <div className="bg-app-green py-1 px-5 rounded w-max flex justify-center items-center">
                5.7%
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div>0.0000005 BTC</div>
              <div className="bg-app-green py-1 px-4 w-max rounded flex justify-center items-center">
                12.7%
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div>0.005 BNB</div>
              <div className="bg-app-red py-1 px-4 w-max rounded flex justify-center items-center">
                -1.7%
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-app-black-button rounded-xl flex justify-between sm:px-8 px-2 py-5">
              <div>Market cap:</div>
              <div className="font-medium">$31 213 241.942</div>
            </div>
            <div className="bg-app-black-button rounded-xl flex justify-between sm:px-8 px-2 py-5">
              <div>24 hour trading vol:</div>
              <div className="font-medium">$213 241.942</div>
            </div>
            <div className="bg-app-black-button rounded-xl flex justify-between sm:px-8 px-2 py-5">
              <div>Fully diluted caluation:</div>
              <div className="font-medium">$21 241.942</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:px-12 md:py-12 sm:px-8 sm:py-8 px-2 py-4 gap-4 bg-app-black rounded-3xl lg:w-1/2 w-full">
          <div className="bg-app-black-button rounded-xl flex justify-between sm:px-8 px-2 py-5">
            <div>All time high</div>
            <div className="font-medium">$150</div>
          </div>
          <div className="bg-app-black-button rounded-xl flex justify-between sm:px-8 px-2 py-5">
            <div>24 hours Low/High</div>
            <div className="font-medium">2.75/3.09</div>
          </div>
          <div className="bg-app-black-button rounded-xl flex justify-between sm:px-8 px-2 py-5">
            <div>7D Low/High</div>
            <div className="font-medium">2.75/3.09</div>
          </div>
          <div className="bg-app-black-button rounded-xl flex justify-between sm:px-8 px-2 py-5">
            <div>Circulation supply</div>
            <div className="font-medium">$123 253.214</div>
          </div>
          <div className="bg-app-black-button rounded-xl flex justify-between sm:px-8 px-2 py-5">
            <div>Total supply:</div>
            <div className="font-medium">$123 253.214</div>
          </div>
          <div className="bg-app-black-button rounded-xl flex justify-between sm:px-8 px-2 py-5">
            <div>Max supply:</div>
            <div className="font-medium">$123 253.214</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDetail;
