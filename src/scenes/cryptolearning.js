import React from "react";
import { useGetcryptoLearnQuery } from "../services/cryptoLearn";
import {
  Container,
  Box,
  Grid,
  Typography,
  Card,
  CardHeader,
  Button,
  CardContent,
  Skeleton,
} from "@mui/material";
import LearnCard from "../components/learningcard";
import mainbg4 from "../mainbg4.jpg";
import { useGetcryptopodcastQuery } from "../services/cryptoPodcast";
import PodcastCard from "../components/podcastcard";
const CryptoLearningPage = () => {
  const { data: videoData, isFetching } = useGetcryptoLearnQuery({
    q: "crypto",
    hl: "en",
  });
  const { data: podcastData, isFetching2 } = useGetcryptopodcastQuery({
    q: "cryptocurrency",
    type: "podcasts",
    limit: "100",
  });
  const PodcastCardSkeleton = () => (
    <Card>
      <Box display="flex" justifyContent="space-between" gap={2} m={3}>
        <Box display="flex" gap={2}>
          <Skeleton
            variant="rectangular"
            width={80}
            height={80}
            sx={{ borderRadius: "8px" }}
          />
          <Box display="flex" justifyContent="center" flexDirection="column">
            <Skeleton variant="text" width={120} height={24} />
            <Skeleton variant="text" width={80} height={16} />
          </Box>
        </Box>
        <Skeleton variant="circular" width={40} height={40} />
      </Box>
    </Card>
  );
  const LearnCardSkeleton = () => (
    <Card>
      <CardHeader
        avatar={<Skeleton variant="circular" width={40} height={40} />}
        title={<Skeleton variant="text" width={120} />}
      />
      <Skeleton variant="rectangular" height={250} />
      <CardContent>
        <Skeleton variant="text" width="80%" height={36} />
      </CardContent>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Skeleton variant="text" width={80} />
          <Skeleton variant="text" width={120} />
        </Box>
      </CardContent>
    </Card>
  );
  if (isFetching2 || isFetching)
    return (
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Box display="flex" flexDirection="column" mb={3} gap={5}>
                <Skeleton variant="text" width="70%" height={80} />
                <Skeleton variant="text" width="50%" height={60} />
                <Skeleton variant="text" width="90%" height={200} />
                <Skeleton variant="rectangular" width={200} height={50} />
              </Box>
              <Grid container spacing={3}>
                {[...Array(50)].map((_, index) => (
                  <Grid item xs={12} lg={6} key={index}>
                    <LearnCardSkeleton />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4} spacing={2}>
              <Card>
                <CardHeader title="Top Podcasts" />
                {[...Array(50)].map((_, index) => (
                  <PodcastCardSkeleton />
                ))}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Box
              display="flex"
              flexDirection="column"
              mb={3}
              gap={5}
              sx={{
                backgroundImage: `url(${mainbg4})`,
                backgroundSize: "contain",
                backgroundPosition: "right",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box display="flex" flexDirection="column">
                <Typography sx={{ fontSize: "100px" }}>
                  Learn Crypto.
                </Typography>
                <Typography sx={{ color: "#8a3ffc", fontSize: "80px" }}>
                  Earn Crypto.
                </Typography>
              </Box>
              <Typography variant="body1">
                Discover the world of crypto and expand your knowledge through
                engaging videos and insightful podcasts. Learn about
                cryptocurrencies and the latest trends in the crypto space, all
                while staying informed and up-to-date.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  width: "fit-content",
                  paddingInline: "30px",
                  paddingBlock: "15px",
                  backgroundColor: "black",
                }}
              >
                Get Started
              </Button>
            </Box>
            <Grid container spacing={3}>
              {videoData?.contents?.map((data) => (
                <Grid item xs={12} sm={6} lg={6} key={data.video.videoId}>
                  <LearnCard data={data} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} spacing={2}>
            <Card>
              <CardHeader title="Top Podcasts" />
              {podcastData?.podcasts?.items?.map((data) => (
                <Grid item xs={12} key={data.data.uri}>
                  <PodcastCard props={data} />
                </Grid>
              ))}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CryptoLearningPage;
