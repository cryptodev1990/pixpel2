import React from "react";
import HelpCenterButton from "../../Button/HelpCenterButton";
import ModalHalfButton from "../../Button/ModalHalfButton";
import NFTAvatar from "../../Avatar/NFTAvatar";
import "./modal.css";

const NicknameModal = (props) => {
  const handleClick = () => {
    props.setShowModal(false);
  };
  return (
    <>
      {props.showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => props.setShowModal(false)}
            ></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
              <div
                className="relative flex flex-col w-full max-w-lg p-4 mx-auto 
															bg-app-black rounded-xl shadow-lg px-12 py-12 text-lg"
              >
                <div className="text-xl mb-6">Set a customized nickname</div>
                <div className="mb-2">Nickname</div>
                <input
                  className="w-full h-12 px-6 items-center bg-app-black-button rounded-md text-gray-500 mb-6"
                  placeholder="Avatar9281746199"
                />
                <div className="mb-3 text-lg">Select avatar</div>
                <div className="flex gap-4 mb-4">
                  <HelpCenterButton title="Default" />
                  <HelpCenterButton title="NFT" />
                </div>
                <div className="grid grid-cols-4 overflow-auto h-80 gap-2 grid-scroll">
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
