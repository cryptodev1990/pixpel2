import React from "react";
import graph from "../../asssets/images/graph.png";

const Overview = () => {
  return (
    <div className="mt-28 flex flex-col">
      <div className="flex justify-between gap-5">
        <div className="w-1/4 bg-app-black rounded-md px-5 py-4 flex justify-between">
          Monetary Mass:
          <div className="text-app-blue">2.00.000.000 CPAN</div>
        </div>
        <div className="w-1/4 bg-app-black rounded-md px-5 py-4 flex justify-between">
          Locked MM:
          <div className="text-app-blue">50.000.000 CPAN</div>
        </div>
        <div className="w-1/4 bg-app-black rounded-md px-5 py-4 flex justify-between">
          Circulating Supply:
          <div className="text-app-blue">1.00.000.000 CPAN</div>
        </div>
        <div className="w-1/4 bg-app-black rounded-md px-5 py-4 flex justify-between">
          Burned MM:
          <div className="text-app-blue">50.000.000 CPAN</div>
        </div>
      </div>
      <div className="flex justify-between gap-5 my-12">
        <div className="flex gap-5 w-1/2">
          <div className="flex flex-col bg-app-black w-1/2 rounded-md px-5 justify-center">
            <div className="font-medium mb-8">BURN HISTORY</div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">5.000.000</div>
                <div className="text-gray-500">AUG/08/2021</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">1.000.000</div>
                <div className="text-gray-500">NOV/22/2021</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">10.000.000</div>
                <div className="text-gray-500">FEB/28/2022</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">20.000.000</div>
                <div className="text-gray-500">MAR/01/2022</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">15.000.000</div>
                <div className="text-gray-500">APR/18/2022</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">2.000.000</div>
                <div className="text-gray-500">APR/30/2022</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">3.000.000</div>
                <div className="text-gray-500">MAY/24/2022</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">99.000.000</div>
                <div className="text-gray-500">FEB/05/2022</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">1.00.000.000</div>
                <div className="text-gray-500">NOV/03/2022</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">200.000</div>
                <div className="text-gray-500">MAY/01/2022</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-app-black w-1/2 rounded-md px-5 justify-center">
            <div className="font-medium mb-8">MINT HISTORY</div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">20.000.000</div>
                <div className="text-gray-500">AUG/08/2021</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">5.000.000</div>
                <div className="text-gray-500">NOV/22/2021</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">3.000.000</div>
                <div className="text-gray-500">FEB/28/2022</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">20.000.000</div>
                <div className="text-gray-500">MAR/01/2022</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">15.000.000</div>
                <div className="text-gray-500">APR/18/2022</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">2.000.000</div>
                <div className="text-gray-500">APR/30/2022</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">3.000.000</div>
                <div className="text-gray-500">MAY/24/2022</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">99.000.000</div>
                <div className="text-gray-500">FEB/05/2022</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">1.00.000.000</div>
                <div className="text-gray-500">NOV/03/2022</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-blue">200.000</div>
                <div className="text-gray-500">MAY/01/2022</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="text-3xl font-medium mb-5">Financial Data</div>
          <div className="flex flex-col gap-3">
            <div className="bg-app-black rounded-md flex justify-between py-3 px-5 w-full">
              Game Capitalization:
              <div className="text-app-blue">100.000.000 USDT</div>
            </div>
            <div className="bg-app-black rounded-md flex justify-between py-3 px-5 w-full">
              Locked Capitalization:
              <div className="text-app-blue">2.000.000 USDT</div>
            </div>
            <div className="bg-app-black rounded-md flex justify-between py-3 px-5 w-full">
              Monthly Inflation:
              <div className="text-app-blue">2%</div>
            </div>
            <div className="bg-app-black rounded-md flex justify-between py-3 px-5 w-full">
              Monthly Deflation:
              <div className="text-app-blue">0%</div>
            </div>
            <div className="bg-app-black rounded-md flex justify-between py-3 px-5 w-full">
              Yearly Inflation:
              <div className="text-app-blue">20%</div>
            </div>
            <div className="bg-app-black rounded-md flex justify-between py-3 px-5 w-full">
              Yearly Deflation:
              <div className="text-app-blue">0%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-3xl font-medium">
        Account Data
      </div>
      <div className="flex justify-between gap-5 my-5">
        <div className="w-1/3 bg-app-black rounded-md px-5 py-4 flex justify-between">
          Transaction QTY:
          <div className="text-app-blue">3.1 Billion</div>
        </div>
        <div className="w-1/3 bg-app-black rounded-md px-5 py-4 flex justify-between">
          Transaction Amount:
          <div className="text-app-blue">4 Billion</div>
        </div>
        <div className="w-1/3 bg-app-black rounded-md px-5 py-4 flex justify-between">
          Pair Most Used:
          <div className="text-app-blue">PIXP</div>
        </div>
      </div>
      <div className="flex justify-between gap-5 mb-5">
        <div className="w-1/2 bg-app-black rounded-md px-5 py-4 flex justify-between">
          Second Most Used Pair:
          <div className="text-app-blue">TUSD</div>
        </div>
        <div className="w-1/2 bg-app-black rounded-md px-5 py-4 flex justify-between">
          Market Price:
          <div className="text-app-blue">20/PIXP</div>
        </div>
      </div>
      <div className="relative flex gap-5 bg-app-black 2xl:px-16 xl:px-12 lg:px-9 md:px-6 px-3 2xl:py-16 xl:py-12 lg:py-9 md:py-6 py-3 rounded-2xl 2xl:justify-center overflow-x-auto">
        <div className="flex flex-col gap-value -mt-2 sticky top-2 left-2 bottom-2 shrink-0">
          <div className="text-base">10000</div>
          <div className="text-base">9 950</div>
          <div className="text-base">9 900</div>
          <div className="text-base">9 850</div>
          <div className="text-base">9 800</div>
          <div className="text-base">9 750</div>
          <div className="text-base">9 700</div>
          <div className="text-base">9 650</div>
          <div className="text-base">9 600</div>
          <div className="text-base">9 550</div>
          <div className="text-base">9 500</div>
          <div className="text-base">9 450</div>
          <div className="text-base">9 400</div>
          <div className="text-base">9 350</div>
          <div className="text-base">9 300</div>
          <div className="text-base">9 250</div>
          <div className="text-base">9 200</div>
          <div className="text-base">9 150</div>
        </div>
        <div className="flex flex-col gap-5">
          <img
            src={graph}
            alt="Graph"
            className="none-flex"
            style={{ width: "1460px", height: "468px" }}
          />
          <div className="flex gap-time shrink-0">
            <div>3:00 AM</div>
            <div>4:00 AM</div>
            <div>5:00 AM</div>
            <div>6:00 AM</div>
            <div>7:00 AM</div>
            <div>8:00 AM</div>
            <div>9:00 AM</div>
            <div>10:00 AM</div>
            <div>11:00 AM</div>
          </div>
        </div>
      </div>
      <div className="text-3xl font-medium mt-12 mb-6">Actions</div>
      <div className="flex justify-between gap-5">
        <div className="flex flex-col gap-4 w-1/4">
          <div className="font-medium">Withdrawal Limit:</div>
          <div className="bg-app-black rounded-md py-5 px-7 text-sm text-gray-400">
            2.214.415
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/4">
          <div className="font-medium">Slippage Limit:</div>
          <div className="bg-app-black rounded-md py-5 px-7 text-sm text-gray-400">
            2.214.415
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/4">
          <div className="font-medium">Transaction Fee:</div>
          <div className="bg-app-black rounded-md py-5 px-7 text-sm text-gray-400">
            2.214.415
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/4">
          <div className="font-medium">Gas Fee:</div>
          <div className="bg-app-black rounded-md py-5 px-7 text-sm text-gray-400">
            2.214.415
          </div>
        </div>
      </div>
      <div className="flex justify-center my-20">
        <div className="flex px-24 py-5 bg-app-blue rounded-md cursor-pointer">
          SAVE
        </div>
      </div>
    </div>
  );
};

export default Overview;
