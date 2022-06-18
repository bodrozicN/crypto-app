import {
  TCurrency,
  TOrderBy,
  TOrderDirection,
  TTimePeriod,
  TLimitPerPage,
} from "../types";
import { IStats } from "./";
import { CoinListData } from "../types";
export interface IGetCoinsListAndMarketDataParams {
  currency: TCurrency;
  timePeriod: TTimePeriod;
  orderBy: TOrderBy;
  orderDirection: TOrderDirection;
  limit: TLimitPerPage;
  offset: number;
  query?: string;
}

export interface IGetCoinsListAndMarketDataResponse {
  data: {
    stats: IStats;
    coins: CoinListData[];
  };
}
