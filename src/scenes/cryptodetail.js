import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCryptosDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import millify from "millify";
import { BiCheckCircle } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";
import {
  Container,
  Stack,
  Box,
  Typography,
  Card,
  Grid,
  Divider,
  Skeleton,
} from "@mui/material";
import LineChart from "../components/linechart";
import { red, green } from "@mui/material/colors";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const CryptoDetail = () => {
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState("5y");
  const { data, isFetching } = useGetCryptosDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
  if (isFetching)
    return (
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Box display="flex" flexDirection="column" mb={3} gap={5}>
                <Skeleton variant="text" width="70%" height={80} />
                <Skeleton variant="text" width="50%" height={60} />
                <Skeleton variant="text" width="90%" height={200} />
                <Skeleton variant="rectangular" width={200} height={50} />
              </Box>
            </Grid>
            <Grid item xs={12} lg={4} spacing={2}></Grid>
          </Grid>
        </Container>
      </Box>
    );

  const cryptoDetails = data?.data?.coin;
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
    },
    {
      title: "Rank",
      value: cryptoDetails?.rank,
    },
    {
      title: "24h Volume",
      value: `${
        cryptoDetails?.["24hVolume"] && millify(cryptoDetails?.["24hVolume"])
      }`,
    },
    {
      title: "Market Cap",
      value: `${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
    },
    {
      title: "Total Supply",
      value: ` ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
    },
    {
      title: "Circulating Supply",
      value: `${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
    },
  ];
  const DataCard = ({ name, number, icon, isStats }) => {
    return (
      <Box
        display="flex"
        justifyContent="space-between"
        gap={2}
        sx={{
          "&:hover": {
            backgroundColor: "#f0f0f0",
            "& .title": {
              color: "blue",
            },
            "& .views": {
              color: "green",
            },
          },
        }}
      >
        <Typography variant="overline">{name}</Typography>

        <Typography variant="overline">
          {isStats ? `$ ${number}` : `${number} ${cryptoDetails?.symbol}`}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box display={"flex"} flexDirection={"column"} spacing={2} gap={2}>
              <Box display={"flex"} flex={"row"} alignItems={"center"} gap={2}>
                <img src={cryptoDetails?.iconUrl} height={"60px"} />
                <Typography variant="h2">
                  {cryptoDetails?.name.toUpperCase()}
                </Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Typography variant="body1">{`(${cryptoDetails?.symbol})`}</Typography>
                  <Typography variant="body1">{`${cryptoDetails?.rank}`}</Typography>
                </Box>
              </Box>
              <Divider />
              <Box display={"flex"} gap={2}>
                <Typography variant="h4">
                  {`$ ${parseFloat(cryptoDetails?.price).toFixed(2)}`}
                </Typography>
                <Stack direction={"row"} spacing={0} alignItems={"center"}>
                  {cryptoDetails?.change > 0 ? (
                    <ArrowUpwardIcon sx={{ color: green[500] }} />
                  ) : (
                    <ArrowDownwardIcon sx={{ color: red[500] }} />
                  )}
                  <Typography
                    sx={{
                      color: cryptoDetails?.change > 0 ? green[500] : red[500],
                    }}
                  >
                    {`${cryptoDetails?.change}%`}
                  </Typography>
                </Stack>
              </Box>
              <Card>
                <LineChart
                  coinHistory={coinHistory}
                  currentPrice={millify(cryptoDetails?.price)}
                  coinName={cryptoDetails?.name}
                />
              </Card>
              <Typography variant="h4">
                What is {cryptoDetails?.name.toUpperCase()}
              </Typography>
              <Typography variant="caption">
                {cryptoDetails?.description}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display={"flex"} flexDirection={"column"} gap={2}>
              <Card>
                <Box display={"flex"} flexDirection={"column"} gap={2} m={3}>
                  <Typography variant="h4"> Supply information</Typography>
                  <Typography variant="caption">
                    View the total and circulating supply of Bitcoin, including
                    details on how the supplies are calculated.
                  </Typography>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="overline">Approved Supply</Typography>
                    {cryptoDetails?.supply?.confirmed ? (
                      <BiCheckCircle color="green" />
                    ) : (
                      <RxCrossCircled color="red" />
                    )}
                  </Box>
                  {genericStats.map(({ title, value, icon, index }) => (
                    <DataCard
                      name={title}
                      number={value}
                      icon={icon}
                      isStats={false}
                      key={index}
                    />
                  ))}
                </Box>
              </Card>
              <Card>
                <Box display={"flex"} flexDirection={"column"} gap={2} m={3}>
                  <Typography variant="h4">Value statistics</Typography>
                  <Typography variant="caption">
                    An overview showing the statistics of Bitcoin, such as the
                    base and quote currency, the rank, and trading volume.
                  </Typography>
                  {stats.map(({ title, value, icon, index }) => (
                    <DataCard
                      name={title}
                      number={value}
                      icon={icon}
                      isStats={true}
                      key={index}
                    />
                  ))}
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CryptoDetail;
