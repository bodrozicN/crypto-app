import {
  TCurrency,
  TTimePeriod,
  CoinDetails,
  ExcangesDetails,
  PriceHistory,
} from "../types";
import { CoinOHLC } from "../types/coinOHLC";

export interface IGetCoinDataParams {
  uuid: string | undefined;
  currency: TCurrency;
  timePeriod: TTimePeriod;
}

export interface IGetCoinDataResponse {
  coinDetails: {
    data: {
      coin: CoinDetails;
    };
  };
  coinExcanges: {
    data: {
      exchanges: ExcangesDetails[];
    };
  };
  coinOHLC: {
    data: {
      ohlc: CoinOHLC[];
    };
  };

  coinPriceHistory: {
    data: {
      history: PriceHistory[];
    };
  };
}
