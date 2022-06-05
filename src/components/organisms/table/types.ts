import { CoinListData, ExcangesDetails, TCurrency } from "../../../types";

type CoinsTableProps = {
  type: "coins";
  theadContent: string[];
  coinsArr: CoinListData[] | undefined;
  currency: TCurrency;
};

type ExcangesTableProps = {
  type: "excanges";
  theadContent: string[];
  excanges: ExcangesDetails[] | undefined;
};

export type Props = CoinsTableProps | ExcangesTableProps;
