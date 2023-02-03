import React from "react";
import { FaAlignLeft, FaBell, FaChevronUp, FaSearch } from "react-icons/fa";
import Wrappers from "../assets/wrappers/Navbar";
import profilePic from "../assets/images/profile-pic-01.jpg";
import { useAppcontext } from "../context/appcontext";
const leftside = "flex items-center ml-4 gap-8";
const rightside = "flex items-center gap-2";
const Navbar = () => {
  const { toggleSidebar, toggleSidebarValue } = useAppcontext();
  return (
    <Wrappers>
      <div
        className={toggleSidebarValue ? "container" : "container show-navbar"}
      >
        <div className={leftside}>
          <button type="button" className="searchbtn" onClick={toggleSidebar}>
            <FaAlignLeft />
          </button>
          <div className="input-container flex items-center gap-4">
            <FaSearch />
            <input type="text" className="" />
          </div>
        </div>
        <div className={rightside}>
          <FaBell />
          <span className="username">John doe</span>
          <FaChevronUp />
          <span className="profile ">
            <img
              src={profilePic}
              alt="profile pic"
              className="w-8 rounded-full"
            />
          </span>
        </div>
      </div>
    </Wrappers>
  );
};

export default Navbar;
