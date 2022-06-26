import {
  CoinChartSectionProps,
  CoinCredentials,
  ExcangesTableProps,
  CoinHeroStats,
  CoinOHLC,
  CoinSupply,
  TCurrency,
} from "../../../types";

export type Props = {
  ohlc: CoinOHLC;
  currency: TCurrency;
  chartProps: CoinChartSectionProps;
  coinCredentials: CoinCredentials;
  coinHeroStats: CoinHeroStats;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  excangeTable: ExcangesTableProps;
  coinSupply: CoinSupply | undefined;
  ath:
    | {
        price: string;
        timestamp: number;
      }
    | undefined;
};
