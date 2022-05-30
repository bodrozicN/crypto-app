import { SearchList } from "../types";

export interface IGetSearchRecommendationsParams {
  query: string;
}

export interface IGetSearchRecommendationsResponse {
  data: {
    coins: SearchList[];
  };
}
