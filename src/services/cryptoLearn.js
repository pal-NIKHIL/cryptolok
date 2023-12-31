import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseurl = "https://youtube138.p.rapidapi.com";
const headers = {
  "X-RapidAPI-Key": "0b7b93b1b1msh7f1b2c9ddc17a90p162d8ejsn61bbb4265e01",
  "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
};

const createRequest = (path, params) => ({
  url: `${baseurl}${path}`,
  params,
  headers,
});

export const cryptoLearn = createApi({
  reducerPath: "cryptoLearn",
  baseQuery: fetchBaseQuery({ baseUrl: baseurl }),
  endpoints: (builder) => ({
    getcryptoLearn: builder.query({
      query: ({ q, hl }) => createRequest("/search/", { q, hl }),
    }),
  }),
});

export const { useGetcryptoLearnQuery } = cryptoLearn;
