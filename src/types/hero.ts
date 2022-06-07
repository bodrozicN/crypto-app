import { IStats } from "../interfaces";
import { TCurrency } from ".";
import { CoinCredentials, CoinHeroStats, CoinOHLC } from "./coin";

export type HomeHeroProps = {
  stats: IStats | undefined;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  currency: TCurrency;
};

export type CoinHeroProps = {
  coinCredentials: CoinCredentials;
  coinHeroStats: CoinHeroStats;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  currency: TCurrency;
  ohlc: CoinOHLC;
};
