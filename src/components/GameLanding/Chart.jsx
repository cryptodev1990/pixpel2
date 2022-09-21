import React from "react";
import graph from "../../asssets/images/graph.png";

const Chart = () => {
  return (
    <div className="flex flex-col px-32 gap-10">
      <div className="text-3xl font-bold">Chart</div>
      <div className="flex gap-5 bg-app-black px-16 py-16 rounded-2xl">
        <div className="flex flex-col gap-value -mt-2">
          <div>10000</div>
          <div>9 950</div>
          <div>9 900</div>
          <div>9 850</div>
          <div>9 800</div>
          <div>9 750</div>
          <div>9 700</div>
          <div>9 650</div>
          <div>9 600</div>
          <div>9 550</div>
          <div>9 500</div>
          <div>9 450</div>
          <div>9 400</div>
          <div>9 350</div>
          <div>9 300</div>
          <div>9 250</div>
          <div>9 200</div>
          <div>9 150</div>
        </div>
        <div className="flex flex-col gap-5">
          <img src={graph} alt="Graph" />
          <div className="flex gap-time">
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
    </div>
  )
}

export default Chart;