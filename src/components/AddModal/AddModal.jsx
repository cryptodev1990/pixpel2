import React from "react";
import "./AddModal.scss";

const AddModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="add-modal">
      <div className="add-modal-container">
        <div className="add-modal-body flex flex-col justify-center items-center pt-10 pb-5">
          <div className="text-2xl mb-5">ADD PROPERTIES</div>
          <p>Add properties to your nft like stats, skills, level, etc.</p>
        </div>
        <div className="flex flex-col px-12 gap-2">
          <div className="text-lg">Name</div>
          <input
            type="text"
            className="collection__input px-6"
            placeholder="PIXP Deposited"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="collection__btn mt-10 w-max font-medium px-16"
            onClick={props.handleClose}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddModal;
