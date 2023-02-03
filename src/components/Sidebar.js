import React from "react";
import Wrappers from "../assets/wrappers/Sibebar";
import { useAppcontext } from "../context/appcontext";
import NavLinks from "./NavLinks";

const Sidebar = () => {
  const { toggleSidebarValue } = useAppcontext();
  return (
    <Wrappers>
      <div
        className={
          toggleSidebarValue
            ? "sidebar-container show-sidebar"
            : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <p className="logo">ACME</p>
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrappers>
  );
};

export default Sidebar;
