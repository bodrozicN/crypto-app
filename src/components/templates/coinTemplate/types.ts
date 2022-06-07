import {
  CoinChartSectionProps,
  CoinCredentials,
  CoinExcanges,
  CoinHeroStats,
  CoinOHLC,
  TCurrency,
} from "../../../types";

export type Props = {
  ohlc: CoinOHLC;
  currency: TCurrency;
  chartProps: CoinChartSectionProps;
  coinCredentials: CoinCredentials;
  coinHeroStats: CoinHeroStats;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  excangeTable: CoinExcanges;
};
