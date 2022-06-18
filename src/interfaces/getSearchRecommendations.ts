import { CoinSearchResult } from "../types";

export interface IGetSearchRecommendationsParams {
  query: string;
}

export interface IGetSearchRecommendationsResponse {
  data: {
    coins: CoinSearchResult[];
  };
}
