import React, { useState } from "react";
import AddPropertiesModal from "./AddPropertiesModal";

const SkillsModal = ({ showModal, setShowModal }) => {
  const [showAddPropertiesModal, setShowAddPropertiesModal] = useState(false);

  const handleClick = () => {
    setShowAddPropertiesModal(true);
    setShowModal(false);
  }
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
              <div className="relative flex flex-col w-full max-w-3xl mx-auto bg-app-black-modal rounded-xl shadow-lg md:px-12 py-12 text-lg">
                <div className="flex items-center justify-center mb-6 text-2xl">
                  SKILLS
                </div>
                <div className="text-gray-400 flex items-center justify-center mb-8">
                  Add skills your NFT
                </div>
                <div className="mb-4">
                  <div className="flex mb-3 gap-8">
                    <div className="w-5/12 text-base">Name</div>
                    <div className="w-5/12 text-base">Value</div>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex flex-col w-5/12">
                      <input
                        className="py-5 px-5 bg-app-black rounded mb-3"
                        placeholder="Magic"
                      />
                      <input
                        className="py-5 px-5 bg-app-black rounded mb-5"
                        placeholder="Fist"
                      />
                      <div
                        className="px-3 py-2 rounded-xl w-max bg-app-black cursor-pointer"
                        onClick={handleClick}
                      >
                        Add more
                      </div>
                    </div>
                    <div className="flex flex-col w-5/12">
                      <input
                        className="py-5 px-5 bg-app-black rounded mb-3"
                        placeholder="100"
                      />
                      <input
                        className="py-5 px-5 bg-app-black rounded mb-5"
                        placeholder="50"
                      />
                    </div>
                    <div className="flex flex-col w-1/6 gap-3 items-center">
                      <div className="bg-app-red-close px-5 py-5 rounded">
                        <svg
                          className="h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <div className="bg-app-red-close px-5 py-5 rounded">
                        <svg
                          className="h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div
                    className="px-16 py-4 cursor-pointer w-max bg-app-blue rounded-md"
                    onClick={() => setShowModal(false)}
                  >
                    Save
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {
        <AddPropertiesModal
          showModal={showAddPropertiesModal}
          setShowModal={setShowAddPropertiesModal}
        />
      }
    </>
  );
};

export default SkillsModal;
