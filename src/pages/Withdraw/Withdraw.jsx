import React, {useState} from "react";
import Button from "./Button";
import CryptoCard from "./CryptoCard";
import FlatCard from "./FlatCard";

const buttonList = [
    {
      id: 1,
      title: "CRYPTO"
    },
    {
      id: 2,
      title: "FLAT",
    },
  ]
  

const Withdraw = () => {
  const [withdrawState, setWithdrawState] = useState("CRYPTO");
  const [selected, setSelected] = useState(1);

  const handleClick = (button) => {
    setWithdrawState(button.title);
    setSelected(button.id)
  }
    return (
      <>
        <div className="flex flex-col py-12 justify" style={{fontFamily:"Poppins"}}>
          <div className="flex mb-5">
            <div className="text-5xl font-semibold">
              Withdraw Portal
            </div>
          </div>
          <div className="flex flex-row justify-between gap-5 mb-12">
            {
              buttonList.map( (button, idx) => {
                return(
                  <Button key={idx} title={button.title} selected={selected === button.id} onClick={() => {handleClick(button)}}/>
                )
              })
            }
          </div>
          {withdrawState === "CRYPTO" ? <CryptoCard/> : null}
          {withdrawState === "FLAT" ? <FlatCard/> : null}
        </div>
      </>
    )
}
export default Withdraw