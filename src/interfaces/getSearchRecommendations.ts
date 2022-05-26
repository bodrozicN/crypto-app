import { TCurrency, CoinListData } from "../types";

export interface IGetSearchRecommendationsParams {
  query: string;
  currency: TCurrency;
}

type SearchList = Pick<CoinListData, "name" | "iconUrl" | "uuid" | "price">[];

export interface IGetSearchRecommendationsResponse {
  data: {
    coins: SearchList;
  };
}
