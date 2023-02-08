import Chart from "chart.js/auto";
import React from "react";
import { Doughnut } from "react-chartjs-2";
// Chart.register(Doughnut);

const DonutChart = () => {
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
    <Doughnut
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
        ],
      }}
    />
  );
};

export default DonutChart;
