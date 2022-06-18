import { CoinListData, TCurrency, PortfolioAsset } from "../types";

export type CoinsTableProps = {
  coinsArr: CoinListData[] | undefined;
  tableHead: string[];
  currency: TCurrency;
};

export type PortfolioTableProps = {
  coinsArr: PortfolioAsset[] | undefined;
  tableHead: string[];
  currency: TCurrency;
};
