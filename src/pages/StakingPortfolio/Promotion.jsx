import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import DropDownButton from "../../components/DropDown/DropDownButton";
import graph from "../../asssets/images/graph.png";

const dataList = [
  {
    id: 1,
    title: "NEMESIS",
  },
  {
    id: 2,
    title: "VANGUARD",
  },
  {
    id: 3,
    title: "ALPHA",
  },
  {
    id: 4,
    title: "GAMMA",
  },
];

const Promotion = () => {
  const context = useAppContext();
  return (
    <div className="flex flex-col pb-56">
      <div className="text-xl font-medium mb-2">NEMESIS</div>
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <div className="flex flex-col sm:flex-row gap-7 lg:w-1/2 w-full">
          <div className="sm:w-1/4 md:w-1/3 w-full">
            <DropDownButton
              initialContent={dataList[0].title}
              contentList={dataList}
              backgroundColor="bg-app-black"
            />
          </div>
          <div className="flex items-center bg-app-black px-4 py-2 gap-4 rounded-md w-max">
            <div className="text-app-blue font-medium">Locked Staking</div>
            <div
              className="bg-app-blue px-2 py-2 rounded cursor-pointer"
              onClick={() => context.setSelectStaking(1)}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />{" "}
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-app-blue flex px-24 py-4 rounded-md cursor-pointer w-max">
          BOOST
        </div>
      </div>
      <div className="2xl:text-3xl xl:text-2xl lg:text-xl text-lg mb-1 mt-11 font-medium">CAPITALIZATION</div>
      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-12">
        <div className="bg-app-black rounded-md w-full lg:w-1/3 flex justify-between py-4 px-5">
          <div>Maximum capitalization:</div>
          <div className="text-app-blue">2.000.000 CPAN = 4.000.000 TUSD</div>
        </div>
        <div className="bg-app-black rounded-md w-full lg:w-1/3 flex justify-between py-4 px-5">
          <div>Capitalization achived:</div>
          <div className="text-app-blue">2.000.000 CPAN = 4.000.000 TUSD</div>
        </div>
        <div className="bg-app-black rounded-md w-full lg:w-1/3 flex justify-between py-4 px-5">
          <div>Capitalization achived:</div>
          <div className="text-app-blue">2.000.000 CPAN = 4.000.000 TUSD</div>
        </div>
      </div>
      <div className="flex justify-center text-3xl font-semibold mb-6">
        Investors
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <div className="bg-app-black rounded-md w-full lg:w-1/4 flex justify-between py-4 px-5">
          <div>Investors:</div>
          <div className="text-app-blue">20 558</div>
        </div>
        <div className="bg-app-black rounded-md w-full lg:w-1/4 flex justify-between py-4 px-5">
          <div>Quantity if stakes</div>
          <div className="text-app-blue">200.000</div>
        </div>
        <div className="bg-app-black rounded-md w-full lg:w-1/4 flex justify-between py-4 px-5">
          <div>Highest stakes:</div>
          <div className="text-app-blue">1.500 TUSD</div>
        </div>
        <div className="bg-app-black rounded-md w-full lg:w-1/4 flex justify-between py-4 px-5">
          <div>Lowest stake:</div>
          <div className="text-app-blue">50 TUSD</div>
        </div>
      </div>
      <div className="mt-12 mb-6 text-3xl font-semibold flex justify-center">
        Graph
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="relative flex lg:w-1/2 w-full gap-3 bg-app-black px-6 py-7 rounded-xl overflow-x-auto">
          <div className="flex flex-col gap-intervalx sticky shrink-0 text-sm">
            <div>10</div>
            <div>9</div>
            <div>8</div>
            <div>7</div>
            <div>6</div>
            <div>5</div>
            <div>4</div>
            <div>3</div>
            <div>2</div>
            <div>1</div>
          </div>
          <div className="flex flex-col gap-2">
            <img
              src={graph}
              alt="Graph"
              className="none-flex"
              style={{ width: "734px", height: "354px" }}
            />
            <div className="flex gap-intervaly text-sm shrink-0">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
              <div>16</div>
              <div>17</div>
            </div>
          </div>
        </div>
        <div className="bg-app-black rounded-lg flex justify-center items-center lg:w-1/2 w-full"></div>
      </div>
      <div className="mt-12 mb-6 flex justify-center text-3xl font-semibold">
        Status
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <div className="bg-app-black rounded-md flex justify-between py-4 px-5">
          <div>Actual APR:</div>
          <div className="text-app-blue">16.000 PIXP</div>
        </div>
        <div className="bg-app-black rounded-md flex justify-between py-4 px-5">
          <div>APR%:</div>
          <div className="text-app-blue">8%</div>
        </div>
        <div className="bg-app-black rounded-md flex justify-between py-4 px-5">
          <div>Stake Withdrawals:</div>
          <div className="text-app-blue">500.000 PIXP</div>
        </div>
        <div className="bg-app-black rounded-md flex justify-between py-4 px-5">
          <div>Locked</div>
          <div className="text-app-blue">14.000.000 PIXP</div>
        </div>
        <div className="bg-app-black rounded-md flex justify-between py-4 px-5">
          <div>Amount Released:</div>
          <div className="text-app-blue">600.000 PIXP</div>
        </div>
        <div className="bg-app-black rounded-md flex justify-between py-4 px-5">
          <div>Available</div>
          <div className="text-app-blue">100.000 PIXP</div>
        </div>
        <div className="bg-app-black rounded-md flex justify-between py-4 px-5">
          <div>Amount to Pay</div>
          <div className="text-app-blue">516.00 PIXP</div>
        </div>
        <div className="bg-app-black rounded-md flex justify-between py-4 px-5">
          <div>Overdue Date</div>
          <div className="text-app-blue">29/11/2022</div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="bg-app-blue rounded-md px-24 py-5 cursor-pointer">PAY</div>
      </div>
    </div>
  );
};

export default Promotion;
