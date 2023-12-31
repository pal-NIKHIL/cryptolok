import React from "react";
import { useGetcryptoNewsApi2Query } from "../services/cryptonewsApi2";
import NewsCard from "../components/newscard";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  ButtonBase,
  Stack,
  Skeleton,
} from "@mui/material";
import { Link } from "react-router-dom";
const NewsPage = () => {
  const { data, isFetching } = useGetcryptoNewsApi2Query("CryptoCurrency");
  const NewsCardSkeleton = () => {
    return (
      <Card
        sx={{
          borderRadius: "0",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          },
        }}
      >
        <Skeleton
          variant="rectangular"
          width="100%"
          height={250}
          animation="wave"
        />
        <CardContent>
          <Skeleton variant="text" width="80%" height={24} animation="wave" />
        </CardContent>
        <CardContent>
          <Skeleton variant="text" width="100%" height={90} animation="wave" />
        </CardContent>
        <CardContent>
          <Skeleton variant="text" width="50%" height={16} animation="wave" />
        </CardContent>
      </Card>
    );
  };
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
          <Grid container spacing={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card sx={{ height: "50vh" }}>
                  <Skeleton variant="rectangular" width="100%" height="100%" />
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Skeleton variant="text" width="80%" height={24} />
                <Skeleton variant="text" width="100%" height={150} />
                <Skeleton variant="text" width="100%" height={150} />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography>Latest News</Typography>
            </Grid>

            {[...Array(9)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <NewsCardSkeleton />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  }
  const news = data?.articles[0];
  const newsurl =
    news?.url ||
    "https://economictimes.indiatimes.com/markets/cryptocurrency/crypto-prices-today-live-news-bitcoin-dogecoin-ethereum-shibha-inu-cryptocurrency-latest-updates-6-july-2023/articleshow/101538352.cms?from=mdr";
  const newsImage =
    news?.urlToImage ||
    "https://cdn3.desidime.com/cdn-cgi/image/fit=crop,f=auto,onerror=redirect,w=1200,h=1200,q=90/topics/photos/1421034/original/Top-Cryptocurrency-News-Today-1200x1200.jpg";
  const providerName = news?.source?.name || "Amit.Saha ";
  const newsName =
    news?.title ||
    "Indian Government Raids Director of Crypto Exchange WazirX, Freezes $8.1M";
  const newsDescription =
    news?.description ||
    "Get latest Cryptocurrency News updates on daily basis. Get to know about latest crypto prices, IDO, IEO, Crypto exchanges news, Crypto regulations & govt etc only at DesiDIme";
  const date = new Date(news?.publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });
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
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "50vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={newsImage} style={{ width: "100%" }} />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <ButtonBase component={Link} to={newsurl}>
              <Stack justifyContent={"space-evenly"} height={"50vh"}>
                <Typography
                  variant="body1"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {providerName + " " + date}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "4 ",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {newsName}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "5",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {newsDescription}
                </Typography>
              </Stack>
            </ButtonBase>
          </Grid>
          <Grid item xs={12}>
            <Typography>Latest News</Typography>
          </Grid>

          {data?.articles.slice(1).map((data, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <NewsCard news={data} index={index + 1} key={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsPage;
