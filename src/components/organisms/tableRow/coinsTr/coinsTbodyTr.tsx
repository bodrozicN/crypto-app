import React from "react";
import { CoinListData } from "../../../../types";
import { StyledCoinsBodyRow } from "./style";
import { TableCell } from "../../../moleculs";
import { numberFormatter } from "../../../../helpers";
import { chartDataFormatter, formatString } from "../../../../helpers";
import { TCurrency } from "../../../../types";
import { Link } from "react-router-dom";

type Props = {
  item: CoinListData;
  currency: TCurrency;
};

const CoinsTbodyTr = ({ item, currency }: Props) => {
  const { symbol } = item;
  const { iconUrl } = item;
  const { uuid } = item;
  const sparkline = chartDataFormatter(item.sparkline);
  const [curr, price] = numberFormatter(item.price, currency);
  const [, change] = numberFormatter(item.change);
  const [, marketCap] = numberFormatter(item.marketCap, currency);
  const [, volume] = numberFormatter(item["24hVolume"], currency);
  const rank = item.rank < 10 ? `0${item.rank}` : item.rank;
  const name = formatString(item.name, 7, true);
  return (
    <StyledCoinsBodyRow>
      <Link to={`coin/${uuid}`}>
        <TableCell rank={rank} />
        <TableCell name={name} src={iconUrl} alt={name} symbol={symbol} />
        <TableCell currnecy={curr} price={price} />
        <TableCell currnecy="%" price={change} $reverseOrder />
        <TableCell currnecy={curr} price={marketCap} />
        <TableCell currnecy={curr} price={volume} />
        <TableCell chartData={sparkline} />
      </Link>
    </StyledCoinsBodyRow>
  );
};

export default CoinsTbodyTr;
