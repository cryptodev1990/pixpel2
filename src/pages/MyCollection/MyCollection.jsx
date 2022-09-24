import React from "react";
import CollectionCard from "../../components/Developer/CollectionCard";
import { useNavigate } from "react-router-dom";

const MyCollection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col 2xl:px-40 xl:px-32 lg:px-24 md:px-16 sm:px-8 px-4 pb-20 gap-8 brightness-110">
      <div className="flex justify-between">
        <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold">My Collection</div>
        <div className="lg:px-12 sm:px-8 px-4 lg:py-5 sm:py-3 py-2 rounded-lg flex object-center w-max bg-app-blue cursor-pointer lg:text-xl sm:text-lg text-base" onClick={() => navigate("/collection")}>CREATE</div>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </div>
  );
};

export default MyCollection;
