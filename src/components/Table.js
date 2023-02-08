import React from "react";
import Wrappers from "../assets/wrappers/Table";
import { tabledata } from "../utils/tabledata";

const Table = () => {
  return (
    <Wrappers>
      <div className="container bg-white shadow-2xl rounded-xl py-8">
        <h3>Referrer</h3>
        <table className="mx-auto">
          <tbody>
            <tr className="bg-zinc-200 rounded-3xl">
              <th>Location</th>
              <th>Views</th>
              <th>Sales</th>
              <th>Conversion</th>
              <th>Total</th>
            </tr>
            {tabledata.map((item) => {
              const { id, conversion, location, sales, total, views } = item;
              return (
                <tr key={id}>
                  <td>{location}</td>
                  <td>{views}</td>
                  <td>{sales}</td>
                  <td>{conversion}</td>
                  <td>{total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrappers>
  );
};

export default Table;
