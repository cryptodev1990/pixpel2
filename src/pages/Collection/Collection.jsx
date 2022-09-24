import React from "react";
import DropDownButton from "../../components/DropDown/DropDownButton";
import ImageDropDownButton from "../../components/DropDown/ImageDropDownButton";
import { subCategory } from "./dataList";
import { Category } from "./dataList";
import { Blockchain } from "./dataList";
import { PaymentToken } from "./dataList";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const navigate = useNavigate();
  return (
    <div className="px-28 pb-32 flex flex-col">
      <div className="text-3xl mb-8">Create a Collection</div>
      <div className="flex justify-between gap-12 mb-8">
        <div className="flex pl-12 py-16 rounded-lg gap-8 bg-app-black w-1/2">
          <div className="rounded-full w-48 h-48 bg-app-black-button flex-none"></div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl">Logo Image</div>
            <div className="text-lg">350 X 350 RECOMMENDED</div>
            <div className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </div>
            <div className="bg-app-blue px-12 py-6 rounded-xl w-max cursor-pointer">
              UPLOAD
            </div>
          </div>
        </div>
        <div className="flex pl-12 py-16 rounded-lg gap-12 bg-app-black w-1/2">
          <div className="rounded-xl w-72 h-48 bg-app-black-button flex-none"></div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl">Featured Image</div>
            <div className="text-lg">600 X 400 RECOMMENDED</div>
            <div className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className="bg-app-blue px-12 py-6 rounded-xl w-max cursor-pointer">
              UPLOAD
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-app-black w-full px-12 py-16 rounded-xl gap-5 mb-16">
        <div className="w-full h-96 bg-app-black-button rounded-lg"></div>
        <div className="flex items-center justify-between">
          <div className="flex gap-16">
            <div className="text-xl">Banner Image</div>
            <div className="text-lg">1400 X 1400 RECOMMENDED</div>
            <div className="text-gray-500 text-base">
              This image will appear at the top of the collection
            </div>
          </div>
          <div className="px-16 py-6 rounded-lg bg-app-blue cursor-pointer">
            UPLOAD
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-10 mb-12">
        <div className="flex flex-col gap-4 w-1/2">
          <div>Name:</div>
          <input
            className="text-gray-500 px-12 py-6 bg-app-black rounded-xl"
            placeholder="Write your name..."
          />
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <div>URL:</div>
          <input
            className="text-gray-500 px-12 py-6 bg-app-black rounded-xl"
            placeholder="Https://pixpel.com/collection/"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-10">
        <div>Description:</div>
        <textarea
          type="text"
          className="w-full py-10 px-10 rounded-xl h-72 bg-app-black items-start"
          placeholder="Write your name..."
        />
      </div>
      <div className="grid grid-cols-4 gap-5 mb-20">
        <div className="flex flex-col gap-4">
          <div className="text-lg">Category:</div>
          <DropDownButton
            initialContent={Category[0].title}
            contentList={Category}
            backgroundColor="bg-app-black"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-lg">Sub-Category:</div>
          <DropDownButton
            initialContent={subCategory[0].title}
            contentList={subCategory}
            backgroundColor="bg-app-black"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-lg">Blockchain:</div>
          <DropDownButton
            initialContent={Blockchain[0].title}
            backgroundColor="bg-app-black"
            contentList={Blockchain}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-lg">Payment Token:</div>
          <ImageDropDownButton
            initialContent={PaymentToken[0]}
            contentList={PaymentToken}
            backgroundColor="bg-app-black"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="py-8 px-20 bg-app-blue rounded-md text-lg cursor-pointer" onClick={() =>navigate('/mycollection') }>CREATE COLLECTION</div>
      </div>
    </div>
  );
};

export default Collection;
