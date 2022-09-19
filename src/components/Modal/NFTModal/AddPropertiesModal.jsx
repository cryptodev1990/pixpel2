import React from "react";

const AddPropertiesModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-x-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
              <div className="relative flex flex-col w-full max-w-2xl mx-auto bg-app-black rounded-xl shadow-lg md:px-12 py-12 text-lg">
                <div className="flex items-center justify-center mb-6 text-2xl">
                  ADD PROPERTIES
                </div>
                <div className="text-gray-400 flex items-center justify-center mb-8">
                  Add properties to your nft like stats, skills, level, etc.
                </div>
                <div className="mb-3">Name</div>
                <input className="py-5 px-5 rounded-md bg-app-black-button mb-8" placeholder="PIXP Deposited" />
                <div className="flex justify-center items-center">
                  <div className="px-16 py-4 cursor-pointer w-max bg-app-blue rounded-md" onClick={() => setShowModal(false)}>Save</div>
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
