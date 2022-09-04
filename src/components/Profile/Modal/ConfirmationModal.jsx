import React from "react";
import EnableButton from "../../Button/EnableButton";

const ConfirmationModal = () => {
  return (
    <div className="bg-app-black-modal px-15 py-15 flex flex-col">
      <div className="justify-center text-lg mb-5">Order confirmation reminders</div>
      <div className="text-gray-500 text-sm mb-10">When the dunction is enable you must reooNFT every time order is suring</div>
      <EnableButton className="items-center justify-center gap-3">
        <div className="rounded-full bg-app-red w-3 h-3"></div>
      </EnableButton>
    </div>
  )
}

export default ConfirmationModal;