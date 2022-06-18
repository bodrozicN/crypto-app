// types related with coins
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

export type CoinListData = Pick<
  CoinDetails,
  | "24hVolume"
  | "change"
  | "iconUrl"
  | "marketCap"
  | "name"
  | "price"
  | "rank"
  | "symbol"
> & {
  sparkline: string[];
  uuid: string;
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

export type CoinSupply = {
  maxAmount: string;
  totalSyncedAt: string;
  totalAmount: string;
  circulatingSyncedAt: string;
  circulatingAmount: string;
};

export type PortfolioCoin = {
  uuid: string;
  price: number;
  amount: number;
  name: string;
  symbol: string;
  iconUrl: string;
};

export type PortfolioAsset = Pick<
  PortfolioCoin,
  "name" | "symbol" | "uuid" | "iconUrl"
> & {
  currentPrice: string[];
  avgPrice: string[];
  pool: string[];
  rank: number;
};

export type FirebaseCoinData = Pick<PortfolioCoin, "amount" | "price" | "uuid">;

export type CoinSearchResult = Pick<
  CoinListData,
  "name" | "iconUrl" | "uuid" | "price" | "symbol"
>;
