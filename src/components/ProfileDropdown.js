import React from "react";
import { BsPerson } from "react-icons/bs";
import { RiBillLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const data = [
  { id: 1, icon: <BsPerson />, name: "My Profile" },
  { id: 2, icon: <RiBillLine />, name: "Billing" },
  { id: 3, icon: <FiLogOut />, name: "Logout" },
];

const ProfileDropdown = () => {
  return (
    <div className="pl-4 py-4 rounded-2xl shadow-xl bg-white">
      {data.map((item) => {
        const { id, icon, name } = item;
        return (
          <div className="flex items-center mb-4  w-44" key={id}>
            <div className="mr-4 "> {icon} </div>
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileDropdown;
