import React from "react";
import HelpCenterButton from "../../Button/HelpCenterButton";
import ModalHalfButton from "../../Button/ModalHalfButton";
import NFTAvatar from "../../Avatar/NFTAvatar";

const NicknameModal = ({ showModal, setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };
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
              <div
                className="relative flex flex-col w-full max-w-lg p-4 mx-auto 
															bg-app-black rounded-xl shadow-lg md:px-12 py-12 text-lg"
              >
                <div className="text-xl mb-6">Set a customized nickname</div>
                <div className="mb-2">Nickname</div>
                <input
                  className="w-full py-2 px-6 items-center bg-app-black-button rounded-md text-gray-500 mb-6"
                  placeholder="Avatar9281746199"
                />
                <div className="mb-3 text-lg">Select avatar</div>
                <div className="flex gap-4 mb-4 flex-col md:flex-row">
                  <HelpCenterButton title="Default" />
                  <HelpCenterButton title="NFT" />
                </div>
                <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 overflow-auto gap-2 grid-scroll">
                  <NFTAvatar />
                  <NFTAvatar />
                  <NFTAvatar />
                  <NFTAvatar />
                  <NFTAvatar />
                  <NFTAvatar />
                  <NFTAvatar />
                  <NFTAvatar />
                  <NFTAvatar />
                  <NFTAvatar />
                  <NFTAvatar />
                  <NFTAvatar />
                  <NFTAvatar />
                  <NFTAvatar />
                  <NFTAvatar />
                </div>
                <div className="flex mt-4 mb-10 gap-4 w-full">
                  <ModalHalfButton title="Cancel" handleClick={handleClick} />
                  <ModalHalfButton title="Apply" handleClick={handleClick} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default NicknameModal;
