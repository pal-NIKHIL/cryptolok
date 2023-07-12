import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const url = "https://newsapi.org/v2";
const Apikey = "d74000c99147493589885b6ea0e08ad8";
const createRequest = (path) => ({ url: `${url}${path}` });
export const cryptoNewsApi2 = createApi({
  reducerPath: "cryptoNewsApi2",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getcryptoNewsApi2: builder.query({
      query: (category) =>
        createRequest(
          `/everything?q=${category}&sortBy=publishedAt&apiKey=${Apikey}`
        ),
    }),
  }),
});
export const { useGetcryptoNewsApi2Query } = cryptoNewsApi2;
