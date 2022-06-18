import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./headers";
import {
  IGetCoinsListAndMarketDataParams,
  IGetCoinsListAndMarketDataResponse,
  IGetSearchRecommendationsParams,
  IGetSearchRecommendationsResponse,
  IGetCoinDetailsResponse,
  IGetCoinOhlcResponse,
  IGetCoinPriceHistoryResponse,
  IGetCoinExcangesResponse,
  IGetCoinParams,
  IGetCoinSupplyParams,
  IGetCoinSupplyResponse,
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
        query,
      }) =>
        createRequest(
          `coins?referenceCurrencyUuid=${currency}&timePeriod=${timePeriod}&orderBy=${orderBy}&orderDirection=${orderDirection}&limit=${limit}&offset=${offset}${
            query ? `&uuids=${query}` : ""
          }`
        ),
    }),

    getSearchRecommendations: builder.query<
      IGetSearchRecommendationsResponse,
      IGetSearchRecommendationsParams
    >({
      query: ({ query }) =>
        createRequest(
          `search-suggestions?referenceCurrencyUuid=yhjMzLPhuIDl&query=${query}`
        ),
    }),

    getCoin: builder.query<IGetCoinDetailsResponse, IGetCoinParams>({
      query: ({ currency, uuid }) =>
        createRequest(
          `coin/${uuid}?referenceCurrencyUuid=${currency}&timePeriod=24h`
        ),
    }),

    getCoinOhlc: builder.query<IGetCoinOhlcResponse, IGetCoinParams>({
      query: ({ currency, uuid }) =>
        createRequest(
          `coin/${uuid}/ohlc?referenceCurrencyUuid=${currency}&interval=day&limit=1`
        ),
    }),

    getCoinPriceHistory: builder.query<
      IGetCoinPriceHistoryResponse,
      IGetCoinParams
    >({
      query: ({ currency, timePeriod, uuid }) =>
        createRequest(
          `coin/${uuid}/history?referenceCurrencyUuid=${currency}&timePeriod=${timePeriod}`
        ),
    }),

    getCoinExcanges: builder.query<IGetCoinExcangesResponse, IGetCoinParams>({
      query: ({ currency, uuid }) =>
        createRequest(
          `coin/${uuid}/exchanges?referenceCurrencyUuid=${currency}&limit=7&offset=0&orderBy=24hVolume&orderDirection=desc`
        ),
    }),

    getCoinSupply: builder.query<IGetCoinSupplyResponse, IGetCoinSupplyParams>({
      query: ({ uuid }) => createRequest(`coin/${uuid}/supply`),
    }),
  }),
});

export const {
  useGetCoinsListAndMarketDataQuery,
  useGetSearchRecommendationsQuery,
  useGetCoinOhlcQuery,
  useGetCoinQuery,
  useGetCoinPriceHistoryQuery,
  useGetCoinExcangesQuery,
  useGetCoinSupplyQuery,
} = cryptoApi;
