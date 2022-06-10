import {
  CoinDetails,
  CoinSupply,
  ExcangesDetails,
  PriceHistory,
  TCurrency,
  TTimePeriod,
} from "../types";
import { CoinOHLC } from "../types";

export interface IGetCoinParams {
  uuid: string | undefined;
  currency: TCurrency;
  timePeriod?: TTimePeriod;
}

export interface IGetCoinDetailsResponse {
  data: {
    coin: CoinDetails;
  };
}

export interface IGetCoinExcangesResponse {
  data: {
    exchanges: ExcangesDetails[];
  };
}

export interface IGetCoinOhlcResponse {
  data: {
    ohlc: CoinOHLC[];
  };
}

export interface IGetCoinPriceHistoryResponse {
  data: {
    history: PriceHistory[];
  };
}

export interface IGetCoinSupplyParams {
  uuid: string | undefined;
}

export interface IGetCoinSupplyResponse {
  data: {
    supply: CoinSupply;
  };
}
