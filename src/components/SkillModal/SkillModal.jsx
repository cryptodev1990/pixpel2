import React from "react";
import "./SkillModal.scss";

const SkillModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="skill-modal">
      <div className="skill-modal-container">
        <div className="skill-modal-head">
          {props.header}
          <button className="btn btn--secondary close" onClick={props.handleClose}>&times;</button>
        </div>
        <div className="skill-modal-body">
          <h4>SKILLS</h4>
          <p>Add properties to your nft like stats, skills, level, etc.</p>
          <div className="row mt-2">
            <div className="col-5">
              <h6>Name</h6>
              <input type="text" className="collection__input mt" placeholder="PIXP Deposited" />
            </div>
            <div className="col-5">
              <h6>Value</h6>
              <input type="text" className="collection__input mt" placeholder="PIXP Deposited" />
            </div>
            <div className="col-2">
              <button className="btn-cancel">&times;</button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-5">
              <h6>Name</h6>
              <input type="text" className="collection__input mt" placeholder="PIXP Deposited" />
            </div>
            <div className="col-5">
              <h6>Value</h6>
              <input type="text" className="collection__input mt" placeholder="PIXP Deposited" />
            </div>
            <div className="col-2">
              <button className="btn-cancel">&times;</button>
            </div>
          </div>
          <button className="collection__btn mt-2 mb-1" style={{ width: '100%' }}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default SkillModal;