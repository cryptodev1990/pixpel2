import React from "react";

const Developers = () => {
  return (
    <div className="flex flex-col 2xl:py-24 xl:py-20 lg:py-16 md:py-12 sm:py-9 py-5 2xl:gap-12 xl:gap-9 lg:gap-7 md:gap-5 gap-3 2xl:px-32 xl:px-24 lg:px-16 md:px-8 px-3">
      <div className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-bold">Developers</div>
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-col sm:w-1/3 w-full">
          <div className="bg-app-black-button 2xl:h-75 xl:h-64 lg:h-56 md:h-48 sm:h-40 h-75" />
          <div className="text-gray-500 mb-1 xl:text-base text-sm font-medium">Design</div>
          <div className="xl:text-2xl lg:text-xl md:text-lg">Danil Ivashchenko</div>
        </div>
        <div className="flex flex-col sm:w-1/3 w-full">
          <div className="bg-app-black-button 2xl:h-75 xl:h-64 lg:h-56 md:h-48 sm:h-40 h-75" />
          <div className="text-gray-500 mb-1 xl:text-base text-sm font-medium">Team Lead</div>
          <div className="xl:text-2xl lg:text-xl md:text-lg">Juan Vivas</div>
        </div>
        <div className="flex flex-col sm:w-1/3 w-full">
          <div className="bg-app-black-button 2xl:h-75 xl:h-64 lg:h-56 md:h-48 sm:h-40 h-75" />
          <div className="text-gray-500 mb-1 xl:text-base text-sm font-medium">Illustrator</div>
          <div className="xl:text-2xl lg:text-xl md:text-lg">Alfred</div>
        </div>
      </div>
    </div>
  )
}

export default Developers;