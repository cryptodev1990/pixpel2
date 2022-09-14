import React from 'react';
import Graph from '../../asssets/images/UserHome/graph.PNG';

const GraphCard = () => {
	return(
    <>
      <div className="flex flex-col px-12 py-12 text-lg bg-app-black rounded-xl">
        <div className="flex items-center justify-center px-8 rounded-md cursor-pointer w-max bg-app-black-button hover:bg-app-blue h-14">
          <div>
            BTC/USDT
          </div>
        </div>
        <div className="flex flex-row items-center justify-between mt-4">
          <div className="flex flex-row items-center">
            <div className="flex items-center justify-center h-16 px-8 mr-4 rounded-md cursor-pointer w-max bg-app-black-button">
              <div className="text-2xl">
                40656.65839907
              </div>
            </div>
            <div className="flex items-center justify-center h-12 px-8 bg-red-500 rounded-md cursor-pointer w-max">
              <div>
                -1.59
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center h-12 px-8 rounded-md cursor-pointer bg-app-black-button w-max">
              <div className="text-gray-400">
                Past 24 Hours
              </div>
            </div>
          </div> 
        </div>
        <div className="flex h-72 mt-7">
          <img className="w-full h-full" src={Graph} alt={""}/>
        </div>
        <div className="flex flex-row justify-end gap-3 mt-8">
          <div className="flex items-center justify-center h-12 px-5 py-3 rounded-lg cursor-pointer w-max bg-app-black-button">
            <div className="text-lg">
              24H
            </div>
          </div>
          <div className="flex items-center justify-center h-12 px-5 py-3 rounded-lg cursor-pointer w-max bg-app-black-button">
            <div className="text-lg">
              1W
            </div>
          </div>
          <div className="flex items-center justify-center h-12 px-5 py-3 rounded-lg cursor-pointer w-max bg-app-black-button">
            <div className="text-lg">
              1M
            </div>
          </div>
        </div>
      </div>
    </>
	)
}

export default GraphCard;
