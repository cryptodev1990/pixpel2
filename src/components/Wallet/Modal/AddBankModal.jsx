import React from "react";
import BankButton from "../../Button/BankButton";

const AddBankModal = (props) => {
  const handleClick = () => {
    props.setShowModal(false);
  };
  return (
    <>
      {props.showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => props.setShowModal(false)}
            ></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
              <div className="relative flex flex-col w-full max-w-lg p-4 mx-auto bg-app-black rounded-xl shadow-lg xs:px-6 px-2 py-8 text-lg">
                <div className="flex justify-center text-xl my-3">
                  SELECT BANK
                </div>
                <div className="grid grid-cols-2 gap-3 my-3">
                  <BankButton title="HSBC" handleClick={handleClick} />
                  <BankButton title="SWISS BANK" handleClick={handleClick} />
                  <BankButton title="STANDARD" handleClick={handleClick} />
                  <BankButton title="BANK OF CHINA" handleClick={handleClick} />
                  <BankButton title="DANESCO" handleClick={handleClick} />
                  <BankButton title="BBVA" handleClick={handleClick} />
                </div>
                <BankButton title="DBS" handleClick={handleClick} />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AddBankModal;
