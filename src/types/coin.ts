import { TCurrency } from "./";

// types related with coins

export type CoinListData = {
  "24hVolume": string;
  change: string;
  iconUrl: string;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  sparkline: string[];
  symbol: string;
  uuid: string;
};

export type CoinDetails = {
  "24hVolume": string;
  allTimeHigh: {
    price: string;
    timestamp: number;
  };
  change: string;
  iconUrl: string;
  listedAt: number;
  marketCap: string;
  name: string;
  numberOfExchanges: number;
  numberOfMarkets: number;
  price: string;
  priceAt: number;
  rank: number;
  symbol: string;
  websiteUrl: string;
};

export type CoinCredentials = Partial<
  Pick<CoinDetails, "name" | "symbol" | "rank" | "iconUrl">
>;

export type CoinHeroStats = Partial<
  Pick<
    CoinDetails,
    | "24hVolume"
    | "change"
    | "listedAt"
    | "marketCap"
    | "numberOfExchanges"
    | "numberOfMarkets"
    | "symbol"
    | "websiteUrl"
    | "name"
  >
>;

export type CoinOHLC = {
  close: string | undefined;
  high: string | undefined;
  low: string | undefined;
};

export type CoinsTableProps = {
  coinsArr: CoinListData[] | undefined;
  tableHead: string[];
  currency: TCurrency;
};

export type CoinSupply = {
  maxAmount: string;
  totalSyncedAt: string;
  totalAmount: string;
  circulatingSyncedAt: string;
  circulatingAmount: string;
};

export type CoinForStore = {
  uuid: string;
  price: number;
  amount: number;
  name: string;
  symbol: string;
  iconUrl: string;
};

export type StoredCoinInfo = Pick<CoinForStore, "amount" | "price" | "uuid">;
