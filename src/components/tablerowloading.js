import React from "react";
import { Link } from "react-router-dom";
import {
  TableRow,
  TableCell,
  Stack,
  Avatar,
  Typography,
  Skeleton,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import millify from "millify";

const TableRowSkeleton = () => {
  return (
    <TableRow>
      <TableCell>
        <Skeleton variant="text" width={30} />
      </TableCell>
      <TableCell>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar>
            <Skeleton variant="circular" width={32} height={32} />
          </Avatar>
          <Typography variant="subtitle2">
            <Skeleton variant="text" width={100} />
          </Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Skeleton variant="text" width={70} />
      </TableCell>
      <TableCell>
        <Stack direction="row" spacing={2} alignItems="center">
          <Skeleton
            variant="circular"
            width={20}
            height={20}
            sx={{ bgcolor: green[500] }}
          />
          <Typography>
            <Skeleton variant="text" width={40} />
          </Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Skeleton variant="text" width={70} />
      </TableCell>
    </TableRow>
  );
};
export default TableRowSkeleton;
