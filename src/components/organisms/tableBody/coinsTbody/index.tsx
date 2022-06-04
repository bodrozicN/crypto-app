import React from "react";
import { CoinListData } from "../../../../types";
import { CoinsTbodyTr } from "../../../organisms";
import uniqid from "uniqid";
import { TCurrency } from "../../../../types";

type Props = {
  coinsArr: CoinListData[] | undefined;
  currency: TCurrency;
};

const CoinsBody = ({ coinsArr, currency }: Props) => {
  if (!coinsArr)
    return (
      <tbody>
        <tr>
          <td style={{ fontSize: "5rem" }}>Loading arr</td>
        </tr>
      </tbody>
    );
  return (
    <tbody>
      {coinsArr.map((coin: CoinListData) => (
        <CoinsTbodyTr key={uniqid()} coin={coin} currency={currency} />
      ))}
    </tbody>
  );
};

export default CoinsBody;
