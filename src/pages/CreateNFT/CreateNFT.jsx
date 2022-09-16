import React, { useState } from "react";
import { AddModal, SkillModal } from "../../components";
import Select from "react-select";
import "./CreateNFT.scss";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#fff" : "#fff",
    background: "#29313C",
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 25,
    paddingRight: 25,
  }),
  control: () => ({
    background: "#29313C",
    borderRadius: "5px",
    paddingTop: 18,
    paddingBottom: 18,
    display: "flex",
  }),
  indicatorSeparator: () => ({}),
};

const CreateNFT = () => {
  const [addModalShow, setAddModalShow] = useState(false);
  const [skillModalShow, setSkillModalShow] = useState(false);
  return (
    <>
      <div className="px-32 py-8">
        <div className="text-gray-400 text-base mb-6">
          My Collections / The Warrior / Create a New NFT
        </div>
        <div className="text-4xl font-semibold mb-10">Create a New NFT</div>

        <div className="flex gap-10 mb-3">
          <div className="col-7 ">
            <img
              src="assets/images/market/nft-1.jpg"
              alt=""
              className="nft-picture"
            />
          </div>
          <div className="col-5">
            <div className="flex column mb-16">
              <span className="mb-3 text-xl">Name:</span>
              <input
                type="text"
                className="collection__input"
                placeholder="Writer your name..."
              />
            </div>
            <div className="flex column mb-1">
              <span className="mb-3 text-xl">Description:</span>
              <textarea
                rows="10"
                className="collection__area"
                placeholder="Writer your description..."
              ></textarea>
            </div>
          </div>
        </div>
        <div className="text-gray-400 mb-12">
          IMAGE, VIDEO, OR 3D MODEL. FILE SUPPORTED: JPG, PNG, GIF, SVG
        </div>
        <div className="flex gap-4 mt-2">
          <div className="flex column col-6">
            <span className="mb-2">Collection:</span>
            <input
              type="text"
              className="collection__input"
              placeholder="The Warrior"
            />
          </div>
          <div className="flex column col-6">
            <span className="mb-2">Sub-Collection:</span>
            <input
              type="text"
              className="collection__input"
              placeholder="https://pixpel.com/collection/"
            />
          </div>
        </div>
        <div className="flex mt-24 mb-10">
          <div className="text-4xl font-semibold">Properties</div>
          <button
            className="nft-new-btn py-5 px-10"
            onClick={() => {
              setAddModalShow(true);
            }}
          >
            New +
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 mt-2">
            <div className="col-6">
              <div className="row">
                <div className="col-10">
                  <Select options={options} styles={customStyles} />
                </div>
                <div className="col-2">
                  <button
                    className="btn-add"
                    onClick={() => {
                      setSkillModalShow(true);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-10">
                  <Select options={options} styles={customStyles} />
                </div>
                <div className="col-2">
                  <button
                    className="btn-add"
                    onClick={() => {
                      setSkillModalShow(true);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <div className="col-6">
              <div className="row">
                <div className="col-10">
                  <Select options={options} styles={customStyles} />
                </div>
                <div className="col-2">
                  <button
                    className="btn-add"
                    onClick={() => {
                      setSkillModalShow(true);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-10">
                  <Select options={options} styles={customStyles} />
                </div>
                <div className="col-2">
                  <button
                    className="btn-add"
                    onClick={() => {
                      setSkillModalShow(true);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-12 mb-12">
          <div className="flex column col-6">
            <span className="mb-2">Supply:</span>
            <input
              type="text"
              className="bg-app-black rounded py-6 px-4"
              placeholder="The Warrior"
            />
          </div>
          <div className="flex column col-6">
            <span className="mb-2">Blockchain:</span>
            <Select options={options} styles={customStyles} />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="collection__btn mt-2 mb-1 w-max px-20 py-8 text-xl font-medium">
            CREATE NFT
          </button>
        </div>
        <AddModal
          show={addModalShow}
          handleClose={() => {
            setAddModalShow(false);
          }}
        />
        <SkillModal
          show={skillModalShow}
          handleClose={() => {
            setSkillModalShow(false);
          }}
        />
      </div>
    </>
  );
};

export default CreateNFT;
