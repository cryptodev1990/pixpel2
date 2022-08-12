import React from "react";
import "./AddModal.scss";

const AddModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="add-modal">
      <div className="add-modal-container">
        <div className="add-modal-head">
          {props.header}
          <button className="btn btn--secondary close" onClick={props.handleClose}>&times;</button>
        </div>
        <div className="add-modal-body">
          <h4>ADD PROPERTIES</h4>
          <p>Add properties to your nft like stats, skills, level, etc.</p>
          <div className="flex column">
            <h6>Name</h6>
            <input type="text" className="collection__input mt" placeholder="PIXP Deposited" />
          </div>
          <button className="collection__btn mt-2 mb-1" style={{ width: '100%' }}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
export default AddModal;