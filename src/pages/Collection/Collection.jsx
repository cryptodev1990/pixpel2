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
    <div className="2xl1:px-28 xl1:px-24 lg1:px-20 md1:px-16 sm1:px-12 xs:px-8 1xs:px-4 px-2 pb-20 flex flex-col">
      <div className="text-3xl mb-8">Create a Collection</div>
      <div className="flex flex-col xl:flex-row justify-between xl:gap-12 md:gap-8 gap-4 xl:mb-8 md:mb-6 mb-4">
        <div className="flex flex-col xs:flex-row 2xl:px-12 lg:px-8 md:px-6 sm:px-4 px-2 2xl:py-16 lg:py-12 md:py-9 sm:py-6 py-3 rounded-lg gap-8 bg-app-black xl:w-1/2 w-full">
          <div className="rounded-full w-48 h-48 bg-app-black-button flex-none"></div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl">Logo Image</div>
            <div className="text-lg">350 X 350 RECOMMENDED</div>
            <div className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </div>
            <div className="bg-app-blue 2xl:px-12 xl:px-10 lg:px-8 md:px-6 px-4 2xl:py-6 xl:py-5 lg:py-4 md:py-3 py-2 rounded-xl w-max cursor-pointer">
              UPLOAD
            </div>
          </div>
        </div>
        <div className="flex flex-col xs:flex-row 2xl:px-12 lg:px-8 md:px-6 sm:px-4 px-2 2xl:py-16 lg:py-12 md:py-9 sm:py-6 py-3 rounded-lg gap-12 bg-app-black xl:w-1/2 w-full">
          <div className="rounded-xl xs:w-72 w-60 h-40 bg-app-black-button flex-none"></div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl">Featured Image</div>
            <div className="text-lg">600 X 400 RECOMMENDED</div>
            <div className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className="bg-app-blue 2xl:px-12 xl:px-10 lg:px-8 md:px-6 px-4 2xl:py-6 xl:py-5 lg:py-4 md:py-3 py-2 rounded-xl w-max cursor-pointer">
              UPLOAD
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-app-black w-full 2xl:px-12 xl:px-10 lg:px-8 md:px-6 sm:px-4 px-2 2xl:py-16 xl:py-12 lg:py-9 md:py-6 py-3 rounded-xl gap-5 2xl:mb-16 xl:mb-12 lg:mb-9 md:mb-6 mb-4">
        <div className="w-full 2xl1:h-96 xl1:h-90 lg1:h-80 md1:h-72 sm1:h-60 xs:h-52 1xs:h-44 h-32 bg-app-black-button rounded-lg"></div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex flex-col md:flex-row 2xl:gap-16 xl:gap-12 lg:gap-9 md:gap-3 gap-2">
            <div className="md:text-xl text-lg">Banner Image</div>
            <div className="text-lg">1400 X 1400 RECOMMENDED</div>
            <div className="text-gray-500 text-base">
              This image will appear at the top of the collection
            </div>
          </div>
          <div className="2xl:px-16 xl:px-12 lg:px-9 md:px-6 px-4 2xl:py-6 xl:py-5 lg:py-4 md:py-3 py-2 rounded-lg w-max bg-app-blue cursor-pointer">
            UPLOAD
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between xl:gap-10 md:gap-6 gap-3 xl:mb-12 md:mb-8 sm:mb-6 mb-4">
        <div className="flex flex-col md:gap-4 gap-2 md:w-1/2 w-full">
          <div>Name:</div>
          <input
            className="text-gray-500 px-12 py-6 bg-app-black rounded-xl"
            placeholder="Write your name..."
          />
        </div>
        <div className="flex flex-col md:gap-4 gap-2 md:w-1/2 w-full">
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
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-20">
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
        <div
          className="2xl:py-8 xl:py-6 lg:py-5 md:py-4 sm:py-3 py-2  2xl:px-20 xl:px-16 lg:px-12 md:px-9 sm:px-6 px-3 bg-app-blue rounded-md lg:text-lg cursor-pointer"
          onClick={() => navigate("/mycollection")}
        >
          CREATE COLLECTION
        </div>
      </div>
    </div>
  );
};

export default Collection;
