import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./headers";
import {
  IGetCoinsListAndMarketDataParams,
  IGetCoinsListAndMarketDataResponse,
} from "../interfaces";

const url = process.env.REACT_APP_BACIC_URL!;

const createRequest = (url: string) => ({ url, headers });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getCoinsListAndMarketData: builder.query<
      IGetCoinsListAndMarketDataResponse,
      IGetCoinsListAndMarketDataParams
    >({
      query: ({
        currency,
        limit,
        orderBy,
        orderDirection,
        timePeriod,
        offset,
      }) =>
        createRequest(
          `coins?referenceCurrencyUuid=${currency}&timePeriod=${timePeriod}&orderBy=${orderBy}&orderDirection=${orderDirection}&limit=${limit}&offset=${offset}`
        ),
    }),
  }),
});

export const { useGetCoinsListAndMarketDataQuery } = cryptoApi;
