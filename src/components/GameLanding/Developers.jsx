import React from "react";

const Developers = () => {
  return (
    <div className="flex flex-col px-32 py-32 gap-12">
      <div className="text-5xl font-bold">Developers</div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="bg-app-black-button w-133 h-75 mb-6" />
          <div className="text-gray-500 mb-1 font-medium">Design</div>
          <div className="text-2xl">Danil Ivashchenko</div>
        </div>
        <div className="flex flex-col">
          <div className="bg-app-black-button w-133 h-75 mb-6" />
          <div className="text-gray-500 mb-1 font-medium">Team Lead</div>
          <div className="text-2xl">Juan Vivas</div>
        </div>
        <div className="flex flex-col">
          <div className="bg-app-black-button w-133 h-75 mb-6" />
          <div className="text-gray-500 mb-1 font-medium">Illustrator</div>
          <div className="text-2xl">Alfred</div>
        </div>
      </div>
    </div>
  )
}

export default Developers;