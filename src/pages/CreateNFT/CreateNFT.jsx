import React, {useState} from "react";
import { Header, AddModal, SkillModal } from "../../components";
import Select from 'react-select';
import './CreateNFT.scss';

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

const CreateNFT = () => {
  const [addModalShow, setAddModalShow] =  useState(false);
  const [skillModalShow, setSkillModalShow] = useState(false);
  return (
    <>
      <Header></Header>
      <div className="container">
        <h2>Create a New NFT</h2>

        <div className="flex gap-4 mt-2">
          <div className="col-7 ">
            <img src="assets/images/market/nft-1.jpg" alt="" className="nft-picture" />
          </div>
          <div className="col-5">
            <div className="flex column mb-1">
              <span className="mb-1">Name:</span>
              <input type="text" className="collection__input" placeholder="Writer your name..." />
            </div>
            <div className="flex column mb-1">
              <span className="mb-1">Description:</span>
              <textarea rows="10" className="collection__area" placeholder="Writer your description..."></textarea>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-2">
          <div className="flex column col-6">
            <span className="mb-1">Collection:</span>
            <input type="text" className="collection__input" placeholder="The Warrior" />
          </div>
          <div className="flex column col-6">
            <span className="mb-1">Sub-Collection:</span>
            <input type="text" className="collection__input" placeholder="https://pixpel.com/collection/" />
          </div>
        </div>
        <div className="flex properties">
          <h4>Properties</h4>
            <button className="nft-new-btn" onClick={() => {setAddModalShow(true)}}>New +</button>
        </div>
        <div className="flex gap-4 mt-2">
          <div className="col-6">
            <div className="row">
              <div className="col-10">
                <Select options={options} styles={customStyles} />
              </div>
              <div className="col-2">
                <button className="btn-add">+</button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-10">
                <Select options={options} styles={customStyles}/>
              </div>
              <div className="col-2">
                <button className="btn-add" onClick={() => {setSkillModalShow(true)}}>+</button>
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
                <button className="btn-add">+</button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-10">
                <Select options={options} styles={customStyles} />
              </div>
              <div className="col-2">
                <button className="btn-add">+</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-2">
          <div className="flex column col-6">
            <span className="mb-1">Supply:</span>
            <input type="text" className="collection__input" placeholder="The Warrior" />
          </div>
          <div className="flex column col-6">
            <span className="mb-1">Blockchain:</span>
            <Select options={options} styles={customStyles} />
          </div>
        </div>
        <button className="collection__btn mt-2 mb-1" style={{ width: '100%' }}>
          CREATE NFT
        </button>
        <AddModal show={addModalShow} handleClose={() => {setAddModalShow(false)}}/>
        <SkillModal show={skillModalShow} handleClose={() => {setSkillModalShow(false)}}/>
      </div>
    </>
  );
}

export default CreateNFT;