import React from "react";
import { Outlet } from "react-router-dom";
import Wrappers from "../assets/wrappers/SharedLayout";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const SharedLayout = () => {
  return (
    <Wrappers>
      <div className="dashboard">
        <div>
          <Navbar />
          <Sidebar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </div>
    </Wrappers>
  );
};

export default SharedLayout;
