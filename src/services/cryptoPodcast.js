import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseurl = "https://spotify23.p.rapidapi.com";
const headers = {
  "X-RapidAPI-Key": "0b7b93b1b1msh7f1b2c9ddc17a90p162d8ejsn61bbb4265e01",
  "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
};

const createRequest = (path, params) => ({
  url: `${baseurl}${path}`,
  params,
  headers,
});

export const cryptopodcast = createApi({
  reducerPath: "cryptopodcast",
  baseQuery: fetchBaseQuery({ baseUrl: baseurl }),
  endpoints: (builder) => ({
    getcryptopodcast: builder.query({
      query: ({ q, type, limit }) =>
        createRequest("/search/", { q, type, limit }),
    }),
  }),
});

export const { useGetcryptopodcastQuery } = cryptopodcast;
