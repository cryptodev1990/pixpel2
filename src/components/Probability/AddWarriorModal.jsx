import React from "react";
import Dropdown from "../Wallet/Transaction/Dropdown";
import { CategoryList } from "../../pages/MysteryBox/dataList";
import WarriorAvatar from "../Avatar/WarriorAvatar";

const AddWarriorModal = ({ showModal, setShowModal }) => {
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
                className="relative flex flex-col w-full max-w-2xl p-4 mx-auto 
															bg-app-black-modal rounded-xl shadow-lg md:px-12 py-12 text-lg"
              >
                <div className="text-2xl mb-8">Collection The Warrior</div>
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <Dropdown
                    initialContent={CategoryList.title}
                    contentList={CategoryList.content}
                  />
                  <Dropdown
                    initialContent={CategoryList.title}
                    contentList={CategoryList.content}
                  />
                </div>
                <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 overflow-auto gap-2 grid-scroll mb-12">
                  <WarriorAvatar />
                  <WarriorAvatar />
                  <WarriorAvatar />
                  <WarriorAvatar />
                  <WarriorAvatar />
                  <WarriorAvatar />
                  <WarriorAvatar />
                  <WarriorAvatar />
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-app-green px-16 py-4 w-max rounded-md cursor-pointer">
                    Add
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

export default AddWarriorModal;
