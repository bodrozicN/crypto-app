import {
  TCurrency,
  TOrderBy,
  TOrderDirection,
  TTimePeriod,
  TLimitPerPage,
} from "../types";
import { IStats } from "./";
import { CoinListData } from "../types";
export interface IGetCoinsListParams {
  currency: TCurrency;
  timePeriod: TTimePeriod;
  orderBy: TOrderBy;
  orderDirection: TOrderDirection;
  limit: TLimitPerPage;
  offset: number;
  query?: string;
}

export interface IGetCoinsListResponse {
  data: {
    coins: CoinListData[];
  };
}

export interface IGetCoinsStats {
  data: IStats;
}
