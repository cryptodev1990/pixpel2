import React from "react";
import game1 from "../../asssets/images/market/cryptobots.png";
import Button from "../Button/ButtonMar";

const Description = () => {
  return (
    <div className="flex py-24 bg-app-black">
      <div className="flex flex-col justify-center gap-10 w-1/2 px-32">
        <div className="text-4xl font-bold">Dungeons & Crypto Description</div>
        <div className="text-gray-500 text-lg font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit
          amet enim orci. Sed placerat varius lorem ultrices tincidunt. Ut eget
          cursus enim. Ut faucibus, orci et fringilla finibus, lectus augue
          tempor felis, ut fermentum nulla nunc ut ex. Fusce tortor magna,
          convallis quis diam eu, tempor faucibus ligula. Praesent nec elit
          tellus. Nam congue auctor ullamcorper. Donec in felis auctor nisi
          varius hendrerit in a nunc. Donec dolor leo, fermentum quis elit sed,
          vehicula accumsan nisi. Curabitur eget sem at est rutrum cursus.
          Suspendisse dictum tempor tincidunt. Suspendisse at felis velit. Nulla
          sodales semper justo vel tristique. Sed iaculis faucibus nibh, sit
          amet auctor est.
        </div>
        <Button title="Open Mystery Box" />
      </div>
      <div className="flex justify-center items-center w-1/2 px-32">
        <img src={game1} alt="Game" className="w-full" />
      </div>
    </div>
  );
};

export default Description;
