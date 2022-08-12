import React from "react";
import Select from 'react-select';
import "./Collection.scss";
import { Header } from "../../components";
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#fff' : '#fff',
    background: '#29313C',
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 25,
    paddingRight: 25,
  }),
  control: () => ({
    background: '#29313C',
    borderRadius: '5px',
    paddingTop: 18,
    paddingBottom: 18,
    display: 'flex'
  }),
  indicatorSeparator: () => (
    {

    }
  )

}
const Collection = () => {
  return (
    <div className="collection">
      <Header></Header>
      <div className="container">
        <h2 className="collection__title">
          Create a Collection
        </h2>
        <div className="flex gap-4 mb-1">
          <div className="flex col-6 collection__panel">
            <div className="col-4">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="100" fill="#37404C" />
              </svg>
            </div>
            <div className="col-8">
              <h4 className="mb">Logo Image</h4>
              <h6 className="mb">350 X 350 RECOMMEND</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              <button className="collection__btn mt-2">
                UPLOAD
              </button>
            </div>
          </div>
          <div className="flex col-6 collection__panel">
            <div className="col-6">
              <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="200" rx="10" fill="#37404C" />
              </svg>

            </div>
            <div className="col-6">
              <h4 className="mb">Featured Image</h4>
              <h6 className="mb">600 X 400 RECOMMEND</h6>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <button className="collection__btn mt-2">
                UPLOAD
              </button>
            </div>
          </div>
        </div>
        <div className="collection__banner mb-1">
          <div className="collection__banner_img mb-1">

          </div>
          <div className="flex gap-4">
            <span>Banner Image</span>
            <span>350 X 350 RECOMMEND</span>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button className="collection__btn collection__banner_btn">
              UPLOAD
            </button>
          </div>

        </div>
        <div className="flex gap-4 mt-2">
          <div className="flex column col-6">
            <span className="mb-1">Name:</span>
            <input type="text" className="collection__input" placeholder="Writer your name..."/>
          </div>
          <div className="flex column col-6">
            <span className="mb-1">URL:</span>
            <input type="text" className="collection__input" placeholder="http://pixel.com/collection"/>
          </div>
        </div>
        <div className="flex column mt-2">
          <span className="mb-1">Description:</span>
          <textarea className="collection__area" placeholder="Write your name..."/>
        </div>
        <div className="flex gap-4 mt-2">
          <div className="flex column col-3">
            <span className="mb-1">Category:</span>
            <Select options={options} styles={customStyles} />
          </div>
          <div className="flex column col-3">
            <span className="mb-1">URL:</span>
            <Select options={options} styles={customStyles} />
          </div>
          <div className="flex column col-3">
            <span className="mb-1">Sub-Categrory:</span>
            <Select options={options} styles={customStyles} />
          </div>
          <div className="flex column col-3">
            <span className="mb-1">Payment Token:</span>
            <Select options={options} styles={customStyles} />
          </div>
        </div>
        <button className="collection__btn mt-2 mb-1" style={{width: '100%'}}>
          CREATE COLLECTION
        </button>
      </div>

    </div>
  );
}

export default Collection;