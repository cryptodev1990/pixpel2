import React, { useState } from "react";

const Transfer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex justify-center items-center py-3 bg-app-blue rounded-md hover:cursor-pointer w-full">
      Transfer
    </div>
  );
};

export default Transfer;
