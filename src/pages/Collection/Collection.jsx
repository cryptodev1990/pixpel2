import React from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "./Collection.scss";
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
const Collection = () => {
  const navigate = useNavigate();
  return (
    <div className="collection">
      <div className="px-24 pb-40">
        <h2 className="collection__title">Create a Collection</h2>
        <div className="flex mb-8 gap-12">
          <div className="flex col-6 collection__panel">
            <div className="col-4 mr-10">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" r="100" fill="#37404C" />
              </svg>
            </div>
            <div className="col-8">
              <div className="text-xl mb-4">Logo Image</div>
              <div className="mb-3">350 X 350 RECOMMEND</div>
              <div className="text-gray-400 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </div>
              <button className="collection__btn mt-2 font-medium">
                UPLOAD
              </button>
            </div>
          </div>
          <div className="flex col-6 collection__panel">
            <div className="col-6 mr-10">
              <svg
                width="300"
                height="200"
                viewBox="0 0 300 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="300" height="200" rx="10" fill="#37404C" />
              </svg>
            </div>
            <div className="col-6">
              <h4 className="mb-4 text-xl">Featured Image</h4>
              <div className="mb-3">600 X 400 RECOMMEND</div>
              <div className="text-sm text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur
              </div>
              <button className="collection__btn mt-2 font-medium">
                UPLOAD
              </button>
            </div>
          </div>
        </div>
        <div className="collection__banner mb-16">
          <div className="collection__banner_img mb-8"></div>
          <div className="flex gap-8 items-center">
            <div className="text-2xl">Banner Image</div>
            <div className="text-lg">1400 X 1400 RECOMMEND</div>
            <p>This image will appear at the top of the collection</p>
            <button className="collection__btn collection__banner_btn font-medium">
              UPLOAD
            </button>
          </div>
        </div>
        <div className="flex gap-4 mb-12">
          <div className="flex column col-6">
            <span className="mb-3 text-xl">Name:</span>
            <input
              type="text"
              className="collection__input px-10 py-6"
              placeholder="Writer your name..."
            />
          </div>
          <div className="flex column col-6">
            <span className="mb-3 text-xl">URL:</span>
            <input
              type="text"
              className="collection__input px-10 py-6"
              placeholder="http://pixel.com/collection"
            />
          </div>
        </div>
        <div className="flex column mb-12">
          <span className="mb-4 text-xl">Description:</span>
          <textarea
            className="collection__area px-10 py-10"
            placeholder="Write your name..."
          />
        </div>
        <div className="flex gap-4 mb-8">
          <div className="flex column col-3">
            <span className="mb-4 text-lg">Category:</span>
            <Select options={options} styles={customStyles} />
          </div>
          <div className="flex column col-3">
            <span className="mb-4 text-lg">URL:</span>
            <Select options={options} styles={customStyles} />
          </div>
          <div className="flex column col-3">
            <span className="mb-4 text-lg">Sub-Categrory:</span>
            <Select options={options} styles={customStyles} />
          </div>
          <div className="flex column col-3">
            <span className="mb-4 text-lg">Payment Token:</span>
            <Select options={options} styles={customStyles} />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="collection__btn mt-2 font-medium text-lg"
            onClick={() => navigate("/mycollection")}
          >
            CREATE COLLECTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
