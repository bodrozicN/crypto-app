import { TCurrency } from "./";

export type ExcangesDetails = {
  "24hVolume": string;
  btcPrice: string;
  iconUrl: string;
  name: string;
  price: string;
  rank: number;
  recommended: true;
};

export type CoinExcanges = {
  excanges: ExcangesDetails[] | undefined;
  currency: TCurrency;
  tableHead: string[];
};
