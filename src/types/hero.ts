import { IStats } from "../interfaces";
import { TCurrency, FormProps } from ".";
import { CoinCredentials, CoinHeroStats, CoinOHLC } from "./coin";
import { SearchList } from "./searchList";

export type HomeHeroProps = {
  stats: IStats | undefined;
  handleSelectFilters: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSelectLimit: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  currency: TCurrency;
};

export type CoinHeroProps = {
  coinCredentials: CoinCredentials;
  coinHeroStats: CoinHeroStats;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  currency: TCurrency;
  ohlc: CoinOHLC;
};

export type PortfolioHeroProps = {
  isActiveElement: boolean;
  formProps: FormProps;
  searchResult: SearchList[] | undefined;
};
