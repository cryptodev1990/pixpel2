import React from "react";
import EnableButton from "../../Button/EnableButton";
import NFTAvatar from "../../Avatar/NFTAvatar";
import ProfileButton from "../../Button/ProfileButton";

const NicknameModal = (props) => {
  return (
    <>
      {props.showModal ? (
        <div className="bg-app-black-modal px-10 py-10 flex flex-col">
          <div className="mb-8 text-lg">Set a customized nickname</div>
          <div className="text-sm">Nickname</div>
          <input
            className="w-full h-6 px-2 items-center bg-app-black text-gray-500"
            placeholder="Avatar9281746199"
          />
          <div className="mt-4 mb-2">Select avatar</div>
          <div className="flex gap-3">
            <ProfileButton title="Default" />
            <ProfileButton title="NFT" />
          </div>
          <div className="grid grid-cols-4 gap-5">
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
          <div className="flex mt-12 mb-10">
            <EnableButton title="Cancel" />
            <EnableButton title="Apply" />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NicknameModal;
