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
        navigate('/');
        break;
      case 3:
        navigate('/');
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex flex-col px-12 pb-32 gap-16">
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
