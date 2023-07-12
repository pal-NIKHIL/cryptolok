import React from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Card1 from "../components/card1";
import {
  Container,
  Grid,
  Typography,
  Box,
  Skeleton,
  Card,
  CardHeader,
  ButtonBase,
  CardActions,
} from "@mui/material";
import mainbg4 from "../mainbg4.gif";
import OverviewChart from "../components/overviewChart";
import { HiBanknotes } from "react-icons/hi2";
import { GiWorld } from "react-icons/gi";
import { Ri24HoursLine } from "react-icons/ri";
import { FaHandHoldingUsd } from "react-icons/fa";
import { indigo, success, info, warning, error } from "../theme/colors";
import OverViewTable from "../components/overviewtable";
import CardLoading from "../components/card1loading";
import { Link } from "react-router-dom";
import TableRowSkeleton from "../components/tablerowloading";
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(5);
  const globalstats = data?.data?.stats;

  if (isFetching) {
    return (
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={3}>
              <CardLoading />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CardLoading />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CardLoading />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CardLoading />
            </Grid>
            <Grid item xs={12} lg={5}>
              <Card sx={{ height: "100%", alignItems: "center" }}>
                <Skeleton variant="text" width={150} height={32} />
                <Skeleton variant="rectangular" width={400} height={400} />
              </Card>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  py: 0,
                }}
              >
                <Container maxWidth="xl">
                  <Card>
                    <Skeleton variant="rectangular" width="100%" height={64} />
                    <CardHeader
                      title={
                        <Skeleton variant="text" width={200} height={24} />
                      }
                    />
                    <TableRowSkeleton />
                    <TableRowSkeleton />
                    <TableRowSkeleton />
                    <TableRowSkeleton />
                    <TableRowSkeleton />
                    <CardActions
                      sx={{ justifyContent: "flex-end", margin: "10px" }}
                    >
                      <ButtonBase component={Link} to="/cryptocurrencies">
                        <Typography variant="body2" color="text.secondary">
                          See More
                        </Typography>
                        <Skeleton variant="circular" width={16} height={16} />
                      </ButtonBase>
                    </CardActions>
                  </Card>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        // backgroundImage: `url(${mainbg})`,
        // backgroundSize: "auto",
        // backgroundPosition: "cover",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Card>
              <Box
                height={"340px"}
                sx={{
                  backgroundImage: `url(${mainbg4})`,
                  backgroundSize: "contain",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#31302b",
                  color: "whitesmoke",
                }}
              >
                <Typography variant="h1" px={2} pt={5} pb={1}>
                  Global
                </Typography>
                <Typography variant="h1" px={2} py={1}>
                  Crypto
                </Typography>
                <Typography variant="h1" px={2} py={1}>
                  Statistics
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} lg container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card1
                name="Total Crypto"
                number={globalstats.total}
                icon={<FaHandHoldingUsd />}
                c={error.main}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Card1
                name="Total Exchanges"
                number={globalstats.totalExchanges}
                icon={<HiBanknotes />}
                c={warning.main}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Card1
                name="Total 24hVolume"
                number={globalstats.total24hVolume}
                c={success.main}
                icon={<Ri24HoursLine />}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Card1
                name="Total Market Cap"
                number={globalstats.totalMarketCap}
                c={info.main}
                icon={<GiWorld />}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} lg={7}>
            <OverViewTable />
          </Grid>
          <Grid item xs={12} lg={5}>
            <OverviewChart />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
