import React from "react";
import CollectionCard from "../../components/Developer/CollectionCard";
import { useNavigate } from "react-router-dom";

const MyCollection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col px-40 py-16 gap-8 brightness-110">
      <div className="flex justify-between">
        <div className="text-5xl font-bold">My Collection</div>
        <div className="px-12 py-5 rounded-lg flex object-center w-max bg-app-blue cursor-pointer text-xl" onClick={() => navigate("/collection")}>CREATE</div>
      </div>
      <div className="grid grid-cols-3 gap-10">
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
