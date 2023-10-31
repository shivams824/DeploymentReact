import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  chartData: any;
};
const PieChart: React.FC<Props> = ({ chartData }) => {
  const truecount = chartData.filter(
    (item: any) => item.status === true
  ).length;
  const falsecount = chartData.filter(
    (item: any) => item.status === false
  ).length;
  console.log(truecount, "true");
  console.log(falsecount, "false");

  const chartData1 = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        data: [truecount, falsecount],
        backgroundColor: ["rgb(51, 255, 51, 0.7)", "rgb(255, 71, 26, 0.7)"],
        borderColor: ["rgb(0, 128, 0, 1)", "rgb(254, 0, 0, 1)"],
        borderWidth: 1,
      },
    ],
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "left"
        },
      },
    },
  };

  return (
    <div>
      <Pie data={chartData1 } />
    </div>
  );
};

export default PieChart;
