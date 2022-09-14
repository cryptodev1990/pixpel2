import React, { useState } from "react";
import { useEffect } from "react";
import NotificationButton from "../../Button/NotificationButton";
import ConfirmationModal from "../Modal/ConfirmationModal";

const Preferences = () => {
  const [showModal, setShowModal] = useState(false);
  const [activities, setActivities] = useState(false);
  const handleactivites = () => {
    setActivities(!activities);
  };
  const [pixpel, setPixpel] = useState(false);
  const handlepixpel = () => {
    setPixpel(!pixpel);
  };
  const [messages, setMessages] = useState(false);
  const handlemessage = () => {
    setMessages(!messages);
  };
  const [marketing, setMarketing] = useState(false);
  const handlemarketing = () => {
    setMarketing(!marketing);
  };
  const [selected, setSelected] = useState(false);
  const setAll = (flag) => {
    setActivities(flag);
    setPixpel(flag);
    setMessages(flag);
    setMarketing(flag);
  };

  const handleClick = () => {
    if (activities && pixpel && messages && marketing) {
      setSelected(false);
      setAll(false);
    } else {
      setSelected(true);
      setAll(true);
    }
  };

  useEffect(() => {
    setSelected(activities && pixpel && messages && marketing);
  }, [activities, pixpel, messages, marketing]);

  return (
    <>
      <div className="mt-20 mb-8 font-semibold text-3xl">Preferences</div>
      <div className="flex flex-col border-y-2 border-app-black py-3">
        <div className="flex flex-row justify-between items-center border-b-2 border-app-black overflow-x-auto">
          <div className="flex flex-row">
            <div className="bg-app-black-light h-6 w-6 mt-6 rounded-md flex-none"></div>
            <div className="flex flex-col pt-6 mx-4">
              <div className="text-xl">Order Confirmation Reminders</div>
              <div className="my-4 text-gray-400 text-sm md:w-2/3">
                If the order reminder function is enabled, it will need to be
                reconfirmed every time an order is submitted.
              </div>
            </div>
          </div>
          <div className="flex items-baseline px-6">
            <div className="rouned-full w-2.5 h-2.5 bg-app-green rounded-full"></div>
            <div className="w-2/3 mx-3">
              Stop-Limit Order, Auto Borrow/Replay for Margin
            </div>
          </div>
          <div className="py-12 text-base"></div>
          <div
            className="mx-2 flex rounded-md items-center bg-app-black h-10 w-auto px-6 justify-center hover:cursor-pointer"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <button>Edit</button>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-6 overflow-x-auto">
          <div className="flex gap-5">
            <div className="bg-app-black-light h-6 w-6 rounded-md flex-none"></div>
            <div className="text-xl">Notifications</div>
          </div>
          <div className="flex justify-between md:flex-row flex-col gap-7 md:px-0 px-4">
            <div className="flex flex-col md:flex-row gap-3">
              <NotificationButton
                title="PixPel News"
                handleClick={handlepixpel}
                selected={pixpel}
              />
              <NotificationButton
                title="Activities"
                handleClick={handleactivites}
                selected={activities}
              />
              <NotificationButton
                title="System Messages"
                handleClick={handlemessage}
                selected={messages}
              />
              <NotificationButton
                title="Marketing & Email"
                handleClick={handlemarketing}
                selected={marketing}
              />
            </div>
            <div>
              <NotificationButton
                title="Select All"
                handleClick={handleClick}
                selected={selected}
              />
            </div>
          </div>
        </div>
      </div>
      {<ConfirmationModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default Preferences;
