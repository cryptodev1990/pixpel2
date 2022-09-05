import React from "react";
import { securityList } from "../../../pages/Profile/datalist";
import SecurityButton from "../../Button/SecurityButton";

const ProfileSecurity = () => {
  const [selected, setSelected] = React.useState(0);

  const handleClick = (idx) => () => {
    setSelected(idx);
  };

  return (
    <div className="w-full h-auto bg-app-black my-12 flex flex-col rounded-lg py-10 px-8">
      <div className="text-3xl">Security</div>
      <div className="xl:flex-row flex flex-col gap-6 items-baseline mt-6">
        {securityList.map((menu, idx) => {
          return (
            <SecurityButton
              key={idx}
              title={menu.title}
              idx={idx}
              selected={selected === idx}
              handleClick={handleClick(idx)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProfileSecurity;
