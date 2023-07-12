import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const headers = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "0b7b93b1b1msh7f1b2c9ddc17a90p162d8ejsn61bbb4265e01",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};
const url = "https://bing-news-search1.p.rapidapi.com";
const createRequest = (path) => ({ url: `${url}${path}`, headers });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getcryptoNewsApi: builder.query({
      query: (category) =>
        createRequest(
          `/news/search?q=${category}&textFormat=Raw&safeSearch=Off&freshness=Day&count=50`
        ),
    }),
  }),
});

export const { useGetcryptoNewsApiQuery } = cryptoNewsApi;
