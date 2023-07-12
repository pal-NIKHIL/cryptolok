import React from "react";
import {
  Avatar,
  Box,
  Stack,
  Typography,
  SvgIcon,
  Card,
  CardContent,
} from "@mui/material";
import { IoHeartOutline } from "react-icons/io5";
import millify from "millify";
const Card1 = (props) => {
  const { name, number, icon, c } = props;
  return (
    <Card>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              {name}
            </Typography>
            <Typography variant="h4">{`$${millify(number)}`}</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: c,
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>{icon}</SvgIcon>
          </Avatar>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
          <Typography color="text.secondary" variant="caption">
            Since last month
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Card1;
