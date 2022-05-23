import React from "react";
import { ICoinListData } from "../../../interfaces";
import { BodyRow } from "../../organisms";
import uniqid from "uniqid";

type Props = {
  coinsArr: ICoinListData[] | undefined;
};

const TableBody = ({ coinsArr }: Props) => {
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
        <BodyRow key={uniqid()} coin={coin} />
      ))}
    </tbody>
  );
};

export default TableBody;
