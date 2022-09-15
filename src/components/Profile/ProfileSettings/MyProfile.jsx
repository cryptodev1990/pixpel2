import React, { useState } from "react";
import EditButton from "../../Button/EditButton";
import NicknameModal from "../Modal/NicknameModal";

const MyProfile = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="mt-20 mb-8 font-semibold text-3xl">My Profile</div>
      <div className="flex flex-col border-y-2 border-app-black gap-3 py-3">
        <div className="flex sm:flex-row flex-col justify-between sm:items-center border-b-2 border-app-black overflow-x-auto">
          <div className="flex pr-6">
            <div className="bg-app-black-light items-baseline h-6 w-6 rounded-md flex-none"></div>
            <div className="flex flex-col mx-4">
              <div className="text-base">Nickname</div>
              <div className="md:my-4 text-gray-400 text-sm">
                Set a customized nickname for your profile
              </div>
            </div>
          </div>
          <div className="sm:py-12 my-3 text-base px-10">Alberto1738</div>
          <div
            className="flex rounded-md bg-app-black py-2 px-6 justify-center cursor-pointer mb-5 mx-10 w-32 sm:mx-2 sm:w-auto"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Edit
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <div className="bg-app-black-light h-6 w-6 items-baseline rounded-md flex-none"></div>
            <div className="flex flex-col mx-4">
              <div className="text-base">P2P Profile</div>
              <div className="my-4 text-gray-400 text-sm">
                Edit your P2P Profile
              </div>
            </div>
          </div>
          <div className="py-10">
            <EditButton title="Edit" />
          </div>
        </div>
      </div>
      {<NicknameModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default MyProfile;
