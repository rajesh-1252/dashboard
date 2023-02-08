import React, { useState } from "react";
import {
  FaAlignLeft,
  FaBell,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
} from "react-icons/fa";
import Wrappers from "../assets/wrappers/Navbar";
import profilePic from "../assets/images/profile-pic-01.jpg";
import { useAppcontext } from "../context/appcontext";
import ProfileDropdown from "./ProfileDropdown";

const leftside = "flex items-center ml-4 gap-8";
const rightside = "flex items-center gap-2 mr-12";
const Navbar = () => {
  const { toggleSidebar, toggleSidebarValue } = useAppcontext();
  // local state
  const [showProfile, setShowProfile] = useState(false);
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
        <div className={`rightside ${rightside}`}>
          <FaBell />
          <div
            className="profile flex items-center gap-2"
            onClick={() => setShowProfile(!showProfile)}
          >
            <span className="username">John doe</span>
            {showProfile ? <FaChevronUp /> : <FaChevronDown />}

            <span className="profile">
              <img
                src={profilePic}
                alt="profile pic"
                className="w-8 rounded-full"
              />
            </span>
          </div>
          {showProfile ? (
            <div className="dropdown">
              <ProfileDropdown />
            </div>
          ) : null}
        </div>
      </div>
    </Wrappers>
  );
};

export default Navbar;
