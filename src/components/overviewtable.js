import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import List from "../components/list";
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import CoinTable from "../components/table";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  Grid,
  InputAdornment,
  OutlinedInput,
  Typography,
  Stack,
  Card,
  SvgIcon,
  Container,
  Box,
  CardHeader,
  Avatar,
  CardActions,
  ButtonBase,
  Button,
} from "@mui/material";
import { ArrowRight, Margin } from "@mui/icons-material";
const OverViewTable = () => {
  const { data, isFetching } = useGetCryptosQuery(5);
  if (isFetching) return "Loading . . . ";
  const cryptos = data?.data?.coins;
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 0,
      }}
    >
      <Container maxWidth="xl">
        <Card>
          <CardHeader title={"Today's Top 5 Cryptocurrency"} />
          <CoinTable simplified={true} cryptos={cryptos} />
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
      </Container>
    </Box>
  );
};

export default OverViewTable;
