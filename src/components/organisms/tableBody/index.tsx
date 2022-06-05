import { CoinListData } from "../../../types";
import uniqid from "uniqid";
import { CoinsTbodyTr, ExcangesTbodyTr } from "../tableRow";
import { Props } from "./types";

const TableBody = (props: Props) => {
  switch (props.type) {
    case "coins":
      return (
        <tbody>
          {props.coinsArr?.map((coin: CoinListData) => (
            <CoinsTbodyTr
              key={uniqid()}
              coin={coin}
              currency={props.currency}
            />
          ))}
        </tbody>
      );
    case "excanges":
      return (
        <tbody>
          {props.excanges?.map((excange) => (
            <ExcangesTbodyTr excange={excange} key={uniqid()} />
          ))}
        </tbody>
      );
  }
};

export default TableBody;
