import React from "react";
import { useNavigate } from "react-router-dom";

const AddPropertiesModal = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setShowModal(false);
    navigate("/finishmint");
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-x-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
              <div className="relative flex flex-col w-full max-w-2xl mx-auto bg-app-black rounded-xl shadow-lg md:px-12 py-12 text-lg">
                <div className="flex items-center justify-center mb-6 text-2xl">
                  YOU CREATED THE WARRIOR
                </div>
                <div className="bg-app-black-button rounded-lg h-80 mb-12" />
                <div className="flex justify-center items-center">
                  <div
                    className="px-16 py-4 cursor-pointer w-max bg-app-blue rounded-md"
                    onClick={handleClick}
                  >
                    Copy Link
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AddPropertiesModal;
