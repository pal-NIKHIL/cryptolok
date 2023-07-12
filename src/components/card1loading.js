import React from "react";
import { Card, CardContent, Stack, Skeleton } from "@mui/material";
const CardLoading = () => {
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
            <Skeleton variant="text" width={100} height={16} />
            <Skeleton variant="text" width={150} height={32} />
          </Stack>
          <Skeleton variant="circular" width={56} height={56} />
        </Stack>
        <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
          <Skeleton variant="text" width={120} height={12} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardLoading;
