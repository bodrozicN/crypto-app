import uniqid from "uniqid";
import { CoinListData, ExcangesDetails, TCurrency } from "../../../types";
import { CoinsTbodyTr, ExcangesTbodyTr } from "../tableRow";

export type Props = {
  type: "coins" | "excanges";
  items: CoinListData[] | ExcangesDetails[] | undefined;
  currency: TCurrency;
};

const TableBody = ({ currency, items, type }: Props) => {
  const BodyRow = type === "coins" ? CoinsTbodyTr : ExcangesTbodyTr;
  return (
    <tbody>
      {items?.map((item: any) => (
        <BodyRow {...{ item, key: uniqid(), currency }} />
      ))}
    </tbody>
  );
};

export default TableBody;
