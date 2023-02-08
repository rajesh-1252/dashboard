import Chart from "chart.js/auto";
import React from "react";
import { Line } from "react-chartjs-2";
// Chart.register(Line);
const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {},
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  return (
    <Line
      options={options}
      datasetIdKey="id"
      data={{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
        datasets: [
          {
            id: 1,
            label: "Product sold",
            data: [15, 10, 15, 18, 15, 24],
          },
          {
            id: 2,
            label: "",
            data: [19, 7, 17, 13, 16, 10],
          },
        ],
      }}
    />
  );
};

export default LineChart;
