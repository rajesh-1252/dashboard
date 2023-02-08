import React from "react";
import { Outlet } from "react-router-dom";
import Wrappers from "../assets/wrappers/SharedLayout";
import { useAppcontext } from "../context/appcontext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const SharedLayout = () => {
  const { toggleSidebarValue } = useAppcontext();
  return (
    <Wrappers>
      <main className="dashboard">
        <Sidebar />
        <div>
          <Navbar />
          <div
            className={
              toggleSidebarValue
                ? "dashboard-page not-active"
                : "dashboard-page"
            }
          >
            <Outlet />
          </div>
        </div>
      </main>
    </Wrappers>
  );
};

export default SharedLayout;
