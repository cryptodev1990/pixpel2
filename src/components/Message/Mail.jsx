import React from "react";
import Spin from "../../asssets/images/spin.svg";

const Mail = ({ visibility }) => {
  const className =
    "flex justify-end w-full z-10 bottom-44 xl:right-32 lg:right-28 md:right-20 sm:right-12 right-4";
  return (
    <>
      <div className={className + (visibility ? "" : " hidden")}>
        <div className="flex md:w-1/4 w-1/2 h-96 bg-app-black rounded-tl-xl rounded-tr-xl rounded-bl-xl -pl-12 flex-col">
          <div className="flex bg-app-black-button w-full h-10 items-center px-5 rounded-t-md">
            PIXPEL SUPPORT CHAT
          </div>
          <div className="h-72"></div>
          <div className="flex gap-3 px-3">
            <div className="flex rounded-full w-10 h-10 flex-none items-center justify-center bg-app-black-button">
              <img src={Spin} alt="Message" className="w-5 h-5" />
            </div>
            <input
              className="bg-app-black-button flex px-6 items-center w-full h-10 rounded-full"
              placeholder="Write Here"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mail;
