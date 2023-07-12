import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptonewsApi";
import { cryptoNewsApi2 } from "../services/cryptonewsApi2";
import { cryptoLearn } from "../services/cryptoLearn";
import { cryptopodcast } from "../services/cryptoPodcast";
const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [cryptoNewsApi2.reducerPath]: cryptoNewsApi2.reducer,
    [cryptoLearn.reducerPath]: cryptoLearn.reducer,
    [cryptopodcast.reducerPath]: cryptopodcast.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoApi.middleware,
      cryptoNewsApi.middleware,
      cryptoNewsApi2.middleware,
      cryptoLearn.middleware,
      cryptopodcast.middleware
    ),
});

export default store;
