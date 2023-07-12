import {
  Avatar,
  Box,
  Card,
  TableBody,
  TableCell,
  Table,
  TableHead,
  TableRow,
  Typography,
  Stack,
  InputAdornment,
  OutlinedInput,
  SvgIcon,
  Container,
  Tab,
} from "@mui/material";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import millify from "millify";
import { HiOutlineSearch } from "react-icons/hi";
import React, { useState, useEffect } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { red, green } from "@mui/material/colors";
const CoinTable = ({ simplified, cryptos }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <Box>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Curreny</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>24h Change</TableCell>
              {!simplified && <TableCell>Market Cap</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptos?.map((data) => {
              return (
                <TableRow
                  hover
                  component={Link}
                  to={`/cryptocurrencies/${data?.uuid}`}
                  style={{ textDecoration: "none" }}
                >
                  <TableCell>{data?.rank}</TableCell>
                  <TableCell>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                      <Avatar src={data?.iconUrl}></Avatar>
                      <Typography variant="subtitle2">{data?.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{`$ ${millify(data?.price)}`}</TableCell>
                  <TableCell>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                      {data?.change > 0 ? (
                        <ArrowUpwardIcon sx={{ color: green[500] }} />
                      ) : (
                        <ArrowDownwardIcon sx={{ color: red[500] }} />
                      )}
                      <Typography
                        sx={{
                          color: data?.change > 0 ? green[500] : red[500],
                        }}
                      >
                        {`${data?.change}%`}
                      </Typography>
                    </Stack>
                  </TableCell>
                  {!simplified && (
                    <TableCell>{`$ ${millify(data?.marketCap)}`}</TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

export default CoinTable;
