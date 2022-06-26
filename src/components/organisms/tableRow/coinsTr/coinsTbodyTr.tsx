import React from "react";
import { CoinListData } from "../../../../types";
import { StyledCoinsBodyRow } from "./style";
import { TableCell } from "../../../moleculs";
import { currencyFormatter } from "../../../../helpers";
import {
  chartDataFormatter,
  formatString,
  percentFormatter,
} from "../../../../helpers";
import { TCurrency } from "../../../../types";

type Props = {
  item: CoinListData;
  currency: TCurrency;
};

const CoinsTbodyTr = ({ item, currency }: Props) => {
  const { symbol } = item;
  const { iconUrl } = item;
  const { uuid } = item;
  const sparkline = chartDataFormatter(item.sparkline);
  const [curr, price] = currencyFormatter(item.price, currency);
  const [, change] = percentFormatter(item.change);
  const [, marketCap] = currencyFormatter(item.marketCap, currency);
  const [, volume] = currencyFormatter(item["24hVolume"], currency);
  const rank = item.rank < 10 ? `0${item.rank}` : item.rank;
  const name = formatString(item.name, 7, true);
  return (
    <StyledCoinsBodyRow>
      <TableCell rank={rank} uuid={uuid} />
      <TableCell
        name={name}
        src={iconUrl}
        alt={name}
        symbol={symbol}
        uuid={uuid}
      />
      <TableCell currnecy={curr} price={price} uuid={uuid} />
      <TableCell currnecy="%" price={change} $reverseOrder uuid={uuid} />
      <TableCell currnecy={curr} price={marketCap} uuid={uuid} />
      <TableCell currnecy={curr} price={volume} uuid={uuid} />
      <TableCell chartData={sparkline} uuid={uuid} />
    </StyledCoinsBodyRow>
  );
};

export default CoinsTbodyTr;
