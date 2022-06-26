import {
  CoinListData,
  TCurrency,
  PortfolioAsset,
  ExcangesDetails,
} from "../types";

export type CoinsTableProps = {
  coinsArr: CoinListData[] | undefined;
  tableHead: string[];
  currency: TCurrency;
};

export type PortfolioTableProps = {
  coinsArr: PortfolioAsset[] | undefined;
  tableHead: string[];
  currency: TCurrency;
  handleDeleteCoin: (uuid: string | undefined) => void;
};

export type ExcangesTableProps = {
  excanges: ExcangesDetails[] | undefined;
  currency: TCurrency;
  tableHead: string[];
};
