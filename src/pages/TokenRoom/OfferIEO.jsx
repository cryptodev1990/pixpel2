import React from "react";
import IEODetail from "../../components/TokenRoom/IEODetail";

const OfferIEO = () => {
  return (
    <>
    <div className="flex justify-center text-2xl">IEO  SCHEDULE</div>
      <div className="my-12 gap-5 flex flex-col">
        <IEODetail number={1} />
        <IEODetail number={2} />
        <IEODetail number={3} />
        <IEODetail number={4} />
        <IEODetail number={5} />
      </div>
      <div className="w-max py-4 px-8 bg-app-green rounded-lg">+ ADD MORE</div>
      <div className="flex justify-center">
        <div className="bg-app-blue rounded-md py-5 px-24 my-10">IEO</div>
      </div>
    </>
  )
}

export default OfferIEO;