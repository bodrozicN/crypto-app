import { CoinListData } from "./";
import { TCurrency } from "./";

export type CoinsTableProps = {
  coinsArr: CoinListData[] | undefined;
  theadContent: string[];
  currency: TCurrency;
};
