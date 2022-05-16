import {
  TCurrency,
  TOrderBy,
  TOrderDirection,
  TTimePeriod,
  TLimitPerPage,
} from "../types";
import { IStats, ICoinListData } from "./";

export interface IGetCoinsListAndMarketDataParams {
  currency: TCurrency;
  timePeriod: TTimePeriod;
  orderBy: TOrderBy;
  orderDirection: TOrderDirection;
  limit: TLimitPerPage;
  offset: number;
}

export interface IGetCoinsListAndMarketDataResponse {
  data: {
    stats: IStats;
    coins: ICoinListData[];
  };
}
