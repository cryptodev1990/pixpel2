import React from "react";
import EditButton from "../../Button/EditButton";
import NicknameModal from "../Modal/NicknameModal";

const MyProfile = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <div className="mt-20 mb-8 font-semibold text-3xl">My Profile</div>
      <div className="flex flex-col border-y-2 border-app-black gap-3 py-3">
        <div className="flex flex-row justify-between items-center border-b-2 border-app-black">
          <div className="flex flex-row">
            <div className="bg-app-black-light items-baseline h-6 w-6 rounded-md"></div>
            <div className="flex flex-col mx-4">
              <div className="text-base">Nickname</div>
              <div className="my-4 text-gray-400 text-sm">
                Set a customized nickname for your profile
              </div>
            </div>
          </div>
          <div className="py-12 text-base">Alberto1738</div>
          <div className="py-10">
            <EditButton title="Edit" onClick={() => {
              setShowModal(true);
            }} />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <div className="bg-app-black-light h-6 w-6 items-baseline rounded-md"></div>
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
      <NicknameModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default MyProfile;
