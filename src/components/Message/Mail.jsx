import React from "react";
import Spin from "../../asssets/images/spin.svg";
import Close from "../../asssets/images/close.svg";

const Mail = ({ visibility }) => {
  const className =
    "flex flex-row-reverse w-full z-10 fixed -pl-4 right-32 2xl:bottom-44 bottom-32";
  return (
    <>
      <div className={className + (visibility ? "" : " hidden")}>
        <div className="flex md:w-1/4 sm:w-1/2 h-96 bg-app-black rounded-tl-xl rounded-tr-xl rounded-bl-xl -pl-12 flex-col">
          <div className="flex bg-app-black-button w-full h-10 items-center px-5 rounded-t-md">
            PIXPEL SUPPORT CHAT
          </div>
          <div className="h-72"></div>
          <div className="flex gap-2 px-3">
            <div className="flex rounded-full w-10 h-8 items-center justify-center bg-app-black-button">
              <img src={Spin} alt="Message" className="w-4 h-4" />
            </div>
            <input
              className="bg-app-black-button flex px-6 items-center w-full h-8 rounded-full"
              placeholder="Write Here"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mail;
