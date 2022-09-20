import React from "react";
import LimitCard from "./LimitCard";
import GraphCard from "./GraphCard";

const Limit = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-8 2xl:flex-row md:w-auto">
        <GraphCard />
        <LimitCard />
      </div>
    </>
  )
}
  
export default Limit;
  