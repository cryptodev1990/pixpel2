import React from "react";
import EditButton from "../../Button/EditButton";

const Preferences = () => {
  return (
    <div>
      <div className="mt-20 mb-8 font-semibold text-3xl">Preferences</div>
      <div className="flex flex-col border-y-2 border-app-black py-3">
        <div className="flex flex-row justify-between items-center border-b-2 border-app-black">
          <div className="flex flex-row">
            <div className="bg-app-black-light h-6 w-6 mt-6 rounded-md"></div>
            <div className="flex flex-col pt-6 mx-4">
              <div className="text-base">Order Confirmation Reminders</div>
              <div className="my-4 text-gray-400 text-sm w-2/3">
                If the order reminder function is enabled, it will need to be
                reconfirmed every time an order is submitted.
              </div>
            </div>
          </div>
          <div className="flex items-baseline">
            <div className="rouned-full w-2.5 h-2.5 bg-app-green rounded-full"></div>
            <div className="w-2/3 mx-3">
              Stop-Limit Order, Auto Borrow/Replay for Margin
            </div>
          </div>
          <div className="py-12 text-base"></div>
          <div className="py-10">
            <EditButton title="Manage" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <div className="bg-app-black-light h-6 w-6 mt-6 rounded-md"></div>
            <div className="flex flex-col pt-6 mx-4">
              <div className="text-base">Notifications</div>
              <div className="flex flex-row my-4">
                <EditButton
                  title={
                    <div className="flex flex-row items-center">
                      <div className="rounded-full bg-app-green w-2 h-2 mx-2"></div>
                      <div>Pixpel News</div>
                    </div>
                  }
                />
                <EditButton
                  title={
                    <div className="flex flex-row items-center">
                      <div className="rounded-full bg-app-red w-2 h-2 mx-2"></div>
                      <div>Activites</div>
                    </div>
                  }
                />
                <EditButton
                  title={
                    <div className="flex flex-row items-center">
                      <div className="rounded-full bg-app-red w-2 h-2 mx-2"></div>
                      <div>System Messages</div>
                    </div>
                  }
                />
                <EditButton
                  title={
                    <div className="flex flex-row items-center">
                      <div className="rounded-full bg-app-green w-2 h-2 mx-2"></div>
                      <div>Marketing & Email</div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          <div className="pt-12">
            <EditButton
              title={
                <div className="flex flex-row items-center">
                  <div className="rounded-full bg-app-red w-2 h-2 mx-2"></div>
                  <div>Select All</div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;