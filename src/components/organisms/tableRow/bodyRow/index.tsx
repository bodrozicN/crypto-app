import React from "react";
import { ICoinListData } from "../../../../interfaces";
import { StyledBodyRow } from "./style";
import { TableCell } from "../../../moleculs";
import { numberFormatter } from "../../../../helpers";
import { chartDataFormatter } from "../../../../helpers";
import { TCurrency } from "../../../../types";

type Props = {
  coin: ICoinListData;
  currency: TCurrency;
};

const BodyRow = ({ coin, currency }: Props) => {
  const { symbol } = coin;
  const { iconUrl } = coin;
  const { uuid } = coin;
  const sparkline = chartDataFormatter(coin.sparkline);
  const [curr, price] = numberFormatter(coin.price, currency);
  const [, change] = numberFormatter(coin.change);
  const [, marketCap] = numberFormatter(coin.marketCap, currency);
  const [, volume] = numberFormatter(coin["24hVolume"], currency);
  const rank = coin.rank < 10 ? `0${coin.rank}` : coin.rank;
  const name = coin.name.length > 7 ? `${coin.name.slice(0, 7)}...` : coin.name;
  return (
    <StyledBodyRow>
      <TableCell rank={rank} uuid={uuid} />
      {/*prettier-ignore*/}
      <TableCell name={name} src={iconUrl} alt={name} symbol={symbol} uuid={uuid} />
      <TableCell currnecy={curr} price={price} uuid={uuid} />
      <TableCell currnecy="%" price={change} $reverseOrder uuid={uuid} />
      <TableCell currnecy={curr} price={marketCap} uuid={uuid} />
      <TableCell currnecy={curr} price={volume} uuid={uuid} />
      <TableCell chartData={sparkline} uuid={uuid} />
    </StyledBodyRow>
  );
};

export default BodyRow;
