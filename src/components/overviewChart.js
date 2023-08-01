import React from "react";
import { Doughnut } from "react-chartjs-2";
import { indigo, success, info, warning, error } from "../theme/colors";

import { Card, CardContent, CardHeader } from "@mui/material";
import { useGetCryptosQuery } from "../services/cryptoApi";
const OverviewChart = () => {
  const { data, isFetching } = useGetCryptosQuery(5);
  const totalMarket = data?.data?.stats?.totalMarketCap;
  const coinName = [];
  const coinSymbol = [];
  const coinMarketCap = [];
  var remainingMarket = 0;
  for (var i = 0; i < data?.data?.coins.length; i += 1) {
    const item = data?.data?.coins[i];
    coinName.push(item?.name);
    coinSymbol.push(item?.symbol);
    remainingMarket += parseInt(item?.marketCap);
    coinMarketCap.push((item?.marketCap / totalMarket) * 100);
  }
  coinMarketCap.push(((totalMarket - remainingMarket) / totalMarket) * 100);
  coinName.push("others");
  const dataset = {
    labels: coinName,
    datasets: [
      {
        labels: "USD",
        data: coinMarketCap,
        backgroundColor: [
          indigo.main,
          warning.main,
          "#4bc0c0",
          "#ff6384",
          success.main,
          error.main,
        ],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  return (
    <Card sx={{ height: "100%", alignItems: "center" }}>
      <CardHeader title="Total Market Capitalization" />
      <Doughnut data={dataset} options={options} />
    </Card>
  );
};

export default OverviewChart;
