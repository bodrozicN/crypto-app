import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./headers";
import {
  IGetCoinsListAndMarketDataParams,
  IGetCoinsListAndMarketDataResponse,
  IGetSearchRecommendationsParams,
  IGetSearchRecommendationsResponse,
  IGetCoinDataParams,
  IGetCoinDataResponse,
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

    getSearchRecommendations: builder.query<
      IGetSearchRecommendationsResponse,
      IGetSearchRecommendationsParams
    >({
      query: ({ query }) =>
        createRequest(
          `search-suggestions?referenceCurrencyUuid=yhjMzLPhuIDl&query=${query}`
        ),
    }),

    getCoinDetails: builder.query<
      IGetCoinDataResponse | undefined,
      IGetCoinDataParams
    >({
      async queryFn(
        { currency, timePeriod, uuid },
        _queryApi,
        _extraOptions,
        fetchWithBQ
      ) {
        const coinDetails = await fetchWithBQ(
          createRequest(
            `coin/${uuid}?referenceCurrencyUuid=${currency}&timePeriod=24h`
          )
        );
        if (coinDetails.error) throw coinDetails.error;
        const coinOHLC = await fetchWithBQ(
          createRequest(
            `coin/${uuid}/ohlc?referenceCurrencyUuid=${currency}&interval=day&limit=1`
          )
        );
        if (coinOHLC.error) throw coinOHLC.error;
        const coinPriceHistory = await fetchWithBQ(
          createRequest(
            `coin/${uuid}/history?referenceCurrencyUuid=${currency}&timePeriod=${timePeriod}`
          )
        );
        if (coinPriceHistory.error) throw coinPriceHistory.error;
        const coinExcanges = await fetchWithBQ(
          createRequest(
            `coin/${uuid}/exchanges?referenceCurrencyUuid=${currency}&limit=7&offset=0&orderBy=24hVolume&orderDirection=desc`
          )
        );
        if (coinExcanges.error) throw coinExcanges.error;
        const response = {
          coinDetails: coinDetails.data,
          coinOHLC: coinOHLC.data,
          coinPriceHistory: coinPriceHistory.data,
          coinExcanges: coinExcanges.data,
        };
        return coinDetails.data
          ? { data: { ...response } as any }
          : { error: coinDetails.error };
      },
    }),
  }),
});

export const {
  useGetCoinsListAndMarketDataQuery,
  useGetSearchRecommendationsQuery,
  useGetCoinDetailsQuery,
} = cryptoApi;
