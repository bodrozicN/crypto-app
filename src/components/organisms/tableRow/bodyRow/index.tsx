import React from "react";
import { ICoinListData } from "../../../../interfaces";
import { StyledBodyRow } from "./style";
import { TableCell } from "../../../moleculs";
import { numberFormatter } from "../../../../helpers";
import { chartDataFormatter } from "../../../../helpers";

type Props = {
  coin: ICoinListData;
};

const BodyRow = ({ coin }: Props) => {
  const { symbol } = coin;
  const { iconUrl } = coin;
  const { uuid } = coin;
  const sparkline = chartDataFormatter(coin.sparkline);
  const [currency, price] = numberFormatter(coin.price, "5k-_VTxqtCEI");
  const [, change] = numberFormatter(coin.change);
  const [, marketCap] = numberFormatter(coin.marketCap, "5k-_VTxqtCEI");
  const [, volume] = numberFormatter(coin["24hVolume"], "5k-_VTxqtCEI");
  const rank = coin.rank < 10 ? `0${coin.rank}` : coin.rank;
  const name = coin.name.length > 7 ? `${coin.name.slice(0, 7)}...` : coin.name;
  return (
    <StyledBodyRow>
      <TableCell rank={rank} uuid={uuid} />
      {/*prettier-ignore*/}
      <TableCell name={name} src={iconUrl} alt={name} symbol={symbol} uuid={uuid} />
      <TableCell currnecy={currency} price={price} uuid={uuid} />
      <TableCell currnecy="%" price={change} $reverseOrder uuid={uuid} />
      <TableCell currnecy={currency} price={marketCap} uuid={uuid} />
      <TableCell currnecy={currency} price={volume} uuid={uuid} />
      <TableCell chartData={sparkline} uuid={uuid} />
    </StyledBodyRow>
  );
};

export default BodyRow;
