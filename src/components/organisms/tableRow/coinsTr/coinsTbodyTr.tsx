import React from "react";
import { CoinListData } from "../../../../types";
import { StyledCoinsBodyRow } from "./style";
import { TableCell } from "../../../moleculs";
import { numberFormatter } from "../../../../helpers";
import { chartDataFormatter } from "../../../../helpers";
import { TCurrency } from "../../../../types";
import { Link } from "react-router-dom";

type Props = {
  coin: CoinListData;
  currency: TCurrency;
};

const CoinsTbodyTr = ({ coin, currency }: Props) => {
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
