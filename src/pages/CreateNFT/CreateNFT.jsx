import React, { useState } from "react";
import NFT from "../../asssets/images/market/nft-1.jpg";
import {
  collectionList,
  subCollectionList,
  statsList,
  ChainList,
} from "./dataList";
import DropDownButton from "../../components/DropDown/DropDownButton";
import PlusButton from "../../components/Button/PlusButton";
import SelectSomething from "../../components/Button/SelectSomething";
import SkillsModal from "../../components/Modal/NFTModal/SkillsModal";
import AddPropertiesModal from "../../components/Modal/NFTModal/AddPropertiesModal";
import MintAreaModal from "../../components/Modal/NFTModal/MintAreaModal";

const CreateNFT = () => {
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const [showAddPropertiesModal, setShowAddPropertiesModal] = useState(false);
  const [showMintAreaModal, setShowMintAreaModal] = useState(false);

  return (
    <>
      <div className="flex flex-col px-28 pb-40">
        <div className="text-3xl gap-12 mb-8">Create a New NFT</div>
        <div className="flex gap-16 mb-3">
          <img src={NFT} alt="NFT" className="rounded-md w-7/12 h-137"></img>
          <div className="flex flex-col w-5/12">
            <div className="mb-2 text-xl">Name:</div>
            <input
              className="px-10 py-5 bg-app-black rounded-lg mb-20"
              placeholder="Write your name..."
            />
            <div className="mb-2 text-xl">Description:</div>
            <textarea
              className="bg-app-black rounded-xl px-10 py-10 h-86"
              placeholder="write your description..."
            />
          </div>
        </div>
        <div className="text-gray-500 text-lg mb-12">
          IMAGE, VIDEO OR 3D MODEL. FILE SUPPORTED: JPG, PNG, GIF, SVG
        </div>
        <div className="flex justify-between gap-8 mb-28">
          <div className="w-1/2">
            <div className="text-lg mb-2">Collection:</div>
            <DropDownButton
              backgroundColor="bg-app-black-button"
              initialContent={collectionList[0].title}
              contentList={collectionList}
            />
          </div>
          <div className="w-1/2">
            <div className="text-lg mb-2">Sub-Collection:</div>
            <DropDownButton
              initialContent={subCollectionList[0].title}
              backgroundColor="bg-app-black-button"
              contentList={subCollectionList}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mb-5">
          <div className="text-4xl font-bold">Properties</div>
          <div
            className="bg-app-blue px-16 py-6 cursor-pointer rounded-xl text-xl"
            onClick={() => setShowAddPropertiesModal(true)}
          >
            New +
          </div>
        </div>
        <div className="flex justify-between gap-10 w-full mb-5">
          <div className="flex gap-5 w-1/2">
            <div className="w-full rounded-xl py-3 bg-app-black">
              <DropDownButton
                initialContent={statsList[0].title}
                backgroundColor="bg-app-black-button"
                contentList={statsList}
                fontSize="text-2xl"
              />
            </div>
            <PlusButton handleClick={() => setShowSkillsModal(true)} />
          </div>
          <div className="flex gap-5 w-1/2">
            <SelectSomething title="Skills" />
            <PlusButton handleClick={() => setShowSkillsModal(true)} />
          </div>
        </div>
        <div className="flex justify-between gap-10 w-full mb-7">
          <div className="flex gap-5 w-1/2">
            <SelectSomething title="Level" />
            <PlusButton handleClick={() => setShowSkillsModal(true)} />
          </div>
          <div className="flex gap-5 w-1/2">
            <SelectSomething title="Properties" />
            <PlusButton handleClick={() => setShowSkillsModal(true)} />
          </div>
        </div>
        <div className="flex justify-between gap-10 w-full mb-20">
          <div className="flex flex-col gap-3 w-1/2">
            <div>Supply:</div>
            <input
              className="py-5 px-10 rounded-xl bg-app-black text-lg"
              placeholder="The Warrior"
            />
          </div>
          <div className="flex flex-col gap-3 w-1/2">
            <div>Blockchain:</div>
            <DropDownButton
              initialContent={ChainList[0].title}
              backgroundColor="bg-app-black-button"
              contentList={ChainList}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="bg-app-blue py-8 px-12 rounded-xl cursor-pointer text-lg"
            onClick={() => setShowMintAreaModal(true)}
          >
            CREATE NEW NFT
          </div>
        </div>
      </div>
      {
        <SkillsModal
          showModal={showSkillsModal}
          setShowModal={setShowSkillsModal}
        />
      }
      {
        <AddPropertiesModal
          showModal={showAddPropertiesModal}
          setShowModal={setShowAddPropertiesModal}
        />
      }
      {
        <MintAreaModal
          showModal={showMintAreaModal}
          setShowModal={setShowMintAreaModal}
        />
      }
    </>
  );
};

export default CreateNFT;
