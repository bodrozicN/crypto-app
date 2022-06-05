import { CoinListData, ExcangesDetails, TCurrency } from "../../../types";

type CoinsTbodyProps = {
  type: "coins";
  coinsArr: CoinListData[] | undefined;
  currency: TCurrency;
};

type ExcangesTbodyProps = {
  type: "excanges";
  excanges: ExcangesDetails[] | undefined;
};

export type Props = CoinsTbodyProps | ExcangesTbodyProps;
