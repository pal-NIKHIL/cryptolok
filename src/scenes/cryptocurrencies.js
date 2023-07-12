import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import CoinTable from "../components/table";
import {
  InputAdornment,
  OutlinedInput,
  Typography,
  Stack,
  Card,
  SvgIcon,
  Container,
  Box,
  CardActions,
  ButtonBase,
  Skeleton,
} from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import TableRowSkeleton from "../components/tablerowloading";
const CryptoCurrencyPage = () => {
  const { data, isFetching } = useGetCryptosQuery(100);
  const [cryptos, setCryptos] = useState(data?.data?.coins);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const searchData = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setCryptos(searchData);
  }, [data, search]);
  if (isFetching) {
    return (
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack direction="column" spacing={4}>
            <Typography variant="h3">
              <Skeleton variant="text" width={400} />
            </Typography>
            <Card>
              <OutlinedInput
                defaultValue=""
                fullWidth
                placeholder="Search Coins"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <SvgIcon color="action" fontSize="small">
                      <HiOutlineSearch />
                    </SvgIcon>
                  </InputAdornment>
                }
                sx={{ maxWidth: "98%", margin: "10px" }}
              />
            </Card>
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <Card>
              <Skeleton variant="rectangular" width="100%" height={400} />
              <CardActions sx={{ justifyContent: "flex-end", margin: "10px" }}>
                <ButtonBase component={Link} to="/cryptocurrencies">
                  <Typography variant="body2" color="text.secondary">
                    See More
                  </Typography>
                  <SvgIcon fontSize="small">
                    <ArrowRight />
                  </SvgIcon>
                </ButtonBase>
              </CardActions>
            </Card>
          </Stack>
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
      }}
    >
      <Container maxWidth="xl">
        <Stack direction="column" spacing={4}>
          <Typography variant="h3">
            Top Cryptocurrency Prices by Market Cap
          </Typography>
          <Card>
            <OutlinedInput
              defaultValue=""
              fullWidth
              placeholder="Search Coins"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <SvgIcon color="action" fontSize="small">
                    <HiOutlineSearch />
                  </SvgIcon>
                </InputAdornment>
              }
              sx={{ maxWidth: "98%", margin: "10px" }}
            />
          </Card>
          <Card>
            <CoinTable simplified={false} cryptos={cryptos} />
            <CardActions sx={{ justifyContent: "flex-end", margin: "10px" }}>
              <ButtonBase component={Link} to="/cryptocurrencies">
                <Typography variant="body2" color="text.secondary">
                  See More
                </Typography>
                <SvgIcon fontSize="small">
                  <ArrowRight />
                </SvgIcon>
              </ButtonBase>
            </CardActions>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default CryptoCurrencyPage;
