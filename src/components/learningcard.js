import React from "react";
import {
  Item,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  CardMedia,
  ButtonBase,
  Box,
  Avatar,
  CardHeader,
} from "@mui/material";
import { Link } from "react-router-dom";
const LearnCard = ({ data }) => {
  const video = data?.video;
  const videoId = video?.videoId || "1YyAzVmP9xQ";
  const title =
    video?.title ||
    "Cryptocurrency In 5 Minutes | Cryptocurrency Explained | What Is Cryptocurrency? | Simplilearn";
  const publishedTimeText = video?.publishedTimeText || "2 years ago";
  const views = video?.stats?.views || "938744";
  const thumbnails =
    video?.thumbnails?.[0]?.url ||
    "https://blockgeeks.com/wp-content/uploads/2016/11/cryptocurrency.jpg ";
  const author =
    video?.author?.avatar?.[0]?.url ||
    "https://yt3.googleusercontent.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s176-c-k-c0x00ffffff-no-rj";
  const authortitle = video?.author?.title || "simpleLearn";
  return (
    <ButtonBase
      component={Link}
      to={`https://www.youtube.com/watch?v=${videoId}`}
    >
      <Card
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
        <CardHeader avatar={<Avatar src={author} />} title={authortitle} />
        <CardMedia
          component="img"
          height="250"
          alt={title}
          image={thumbnails}
        />
        <CardContent>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {title}
          </Typography>
        </CardContent>
        <CardContent>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="caption">{views + " views"}</Typography>
            <Typography variant="caption">{publishedTimeText}</Typography>
          </Box>
        </CardContent>
      </Card>
    </ButtonBase>
  );
};

export default LearnCard;
