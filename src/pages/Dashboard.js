import React from "react";
import {
  ProductVideo,
  Profile,
  SalesDistribution,
  Statistics,
  Table,
} from "../components";
const Dashboard = () => {
  return (
    <div>
      <div className="top flex justify-between">
        <p className="">OverView</p>
        <button className="add-funds">Add funds</button>
      </div>
      <div className="grid grid-row-3">
        <div className="top grid grid-cols-1 md:grid-cols-3 mt-8">
          <Statistics />
          <SalesDistribution />
          <Profile />
        </div>
        <div className="bottom grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <Table />
          </div>
          <ProductVideo />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
