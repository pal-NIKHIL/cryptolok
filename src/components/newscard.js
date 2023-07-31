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
} from "@mui/material";
import { Link } from "react-router-dom";
const NewsCard = (props) => {
  const { news, index } = props;
  const newsurl =
    news?.url ||
    "https://economictimes.indiatimes.com/markets/cryptocurrency/crypto-prices-today-live-news-bitcoin-dogecoin-ethereum-shibha-inu-cryptocurrency-latest-updates-6-july-2023/articleshow/101538352.cms?from=mdr";
  const newsImage =
    news?.image?.thumbnail?.contentUrl ||
    "https://cdn3.desidime.com/cdn-cgi/image/fit=crop,f=auto,onerror=redirect,w=1200,h=1200,q=90/topics/photos/1421034/original/Top-Cryptocurrency-News-Today-1200x1200.jpg";
  const providerImage =
    news?.provider[0]?.image?.thumbnail?.contentUrl ||
    "https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png";
  const providerName = news?.provider[0]?.name || "Unknown Provider";
  const newsName =
    news?.name ||
    "Indian Government Raids Director of Crypto Exchange WazirX, Freezes $8.1M";
  const date = new Date(news?.datePublished).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });
  const newsDescription =
    news?.description ||
    "Get latest Cryptocurrency News updates on daily basis. Get to know about latest crypto prices, IDO, IEO, Crypto exchanges news, Crypto regulations & govt etc only at DesiDIme";
  return (
    <ButtonBase component={Link} to={newsurl}>
      <Card
        sx={{
          borderRadius: "0",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="250"
          alt={newsName}
          image={newsImage}
        />
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {newsName}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            variant="caption"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "4",
              WebkitBoxOrient: "vertical",
            }}
          >
            {newsDescription}
          </Typography>
        </CardContent>
        <CardContent>
          <Box display="flex" alignItems={"center"} gap={2}>
            <Avatar src={providerImage} />
            <Box display={"flex"} flexDirection={"column"}>
              <Typography variant="caption">{providerName}</Typography>
              <Typography variant="caption">{date}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </ButtonBase>
  );
};

export default NewsCard;
