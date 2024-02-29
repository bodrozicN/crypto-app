import {
  CoinListData,
  ExcangesDetails,
  PortfolioAsset,
  TCurrency,
} from "../../../types";
import { CoinsTbodyTr, ExcangesTbodyTr, PortfolioTbodyTr } from "../tableRow";

export type Props = {
  type: "coins" | "excanges" | "portfolio";
  items: CoinListData[] | ExcangesDetails[] | PortfolioAsset[] | undefined;
  currency: TCurrency;
  handleDeleteCoin?: (uuid: string | undefined) => void;
};

const TableBody = ({ currency, items, type, handleDeleteCoin }: Props) => {
  let BodyRow: any;
  if (type === "coins") BodyRow = CoinsTbodyTr;
  else if (type === "excanges") BodyRow = ExcangesTbodyTr;
  else BodyRow = PortfolioTbodyTr;

  return (
    <tbody>
      {items?.map((item: any, index) => (
        <BodyRow {...{ item, key: index, currency, handleDeleteCoin }} />
      ))}
    </tbody>
  );
};

export default TableBody;
