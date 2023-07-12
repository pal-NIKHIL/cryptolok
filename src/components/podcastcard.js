import React from "react";
import {
  Card,
  Stack,
  Typography,
  Avatar,
  Box,
  ButtonBase,
  CardHeader,
} from "@mui/material";
import { Link } from "react-router-dom";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const PodcastCard = ({ props }) => {
  const { data } = props;
  const url = data?.uri;
  const name = data?.name;
  const imageurl = data?.coverArt?.sources[0]?.url;
  const publisher = data?.publisher?.name;

  const handlePlayClick = () => {
    window.open(url, "_blank");
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      gap={2}
      m={3}
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
      <Box display="flex" gap={2}>
        <img
          src={imageurl}
          alt={name}
          sx={{ objectFit: "cover", borderRadius: "8px" }}
        />
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
            }}
          >
            {`by ${publisher}`}
          </Typography>
        </Box>
      </Box>
      <ButtonBase variant="contained" onClick={handlePlayClick}>
        <PlayCircleFilledIcon />
      </ButtonBase>
    </Box>
  );
};

export default PodcastCard;
