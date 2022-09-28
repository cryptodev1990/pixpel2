import React from "react";
import SelectWorking from "../../components/Developer/SelectWorking";
import { workingList } from "./dataList";
import { useNavigate } from "react-router-dom";

const Developer = () => {
  const navigate = useNavigate();
  const handleWorking = (idx) => () => {
    switch (idx) {
      case 0:
        navigate("/mycollection");
        break;
      case 1:
        navigate("/create-nft");
        break;
      case 2:
        navigate('/mysterybox');
        break;
      case 3:
        navigate('/');
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex flex-col xl:px-12 lg:px-8 sm:px-4 px-2 pb-20 gap-11">
      {workingList.map((working, idx) => {
        return (
          <SelectWorking
            key={idx}
            title={working.title}
            content={working.content}
            button={working.button}
            handleClick={handleWorking(idx)}
          />
        );
      })}
    </div>
  );
};

export default Developer;
