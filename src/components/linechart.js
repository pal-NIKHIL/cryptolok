import { red } from "@mui/material/colors";
import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
const LineChart = ({ coinHistory, coinName, currentPrice }) => {
  const coinPrice = [];
  const timeStamp = [];
  for (var i in coinHistory?.data?.history) {
    const item = coinHistory?.data?.history[i];
    const date = new Date(item?.timestamp * 1000);
    console.log(date.toLocaleDateString("en-US"));
    coinPrice.push(item.price);
    timeStamp.push(date.toLocaleDateString());
  }

  const data = {
    labels: timeStamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        borderColor: "#10b981",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Custom Chart Title",
      },
    },
    animation: {
      easing: "linear",
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: [
        {
          ticks: { beginAtZero: true },
        },
      ],
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
