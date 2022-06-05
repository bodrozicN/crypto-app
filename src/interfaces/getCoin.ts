import {
  CoinDetails,
  ExcangesDetails,
  PriceHistory,
  TCurrency,
  TTimePeriod,
} from "../types";
import { CoinOHLC } from "../types/coinOHLC";

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
