import React from "react";
import { ICoinListData } from "../../../interfaces";
import { BodyRow } from "../../organisms";
import uniqid from "uniqid";
import { TCurrency } from "../../../types";

type Props = {
  coinsArr: ICoinListData[] | undefined;
  currency: TCurrency;
};

const TableBody = ({ coinsArr, currency }: Props) => {
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
      {coinsArr.map((coin: ICoinListData) => (
        <BodyRow key={uniqid()} coin={coin} currency={currency} />
      ))}
    </tbody>
  );
};

export default TableBody;
