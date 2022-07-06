import React from "react";
import { ExcangesDetails, TCurrency } from "../../../../types";
import { TableCell } from "../../../moleculs";
import { StyledExcangesBodyTr } from "./style";
import { currencyFormatter } from "../../../../helpers";

type Props = {
  item: ExcangesDetails | undefined;
  currency: TCurrency;
};

const ExcangesTbodyTr = ({ item, currency }: Props) => {
  const [curr, price] = currencyFormatter(item?.price, currency);
  const [, btcPrice] = currencyFormatter(item?.btcPrice, currency);
  const [, volume] = currencyFormatter(item?.["24hVolume"], currency);

  return (
    <StyledExcangesBodyTr>
      <TableCell
        rank={item && item?.rank < 10 ? `0${item?.rank}` : item?.rank}
        src={item?.iconUrl}
        alt={item?.name}
      />
      <TableCell name={item?.name} />
      <TableCell price={price} currnecy={curr} />
      <TableCell price={btcPrice} />
      <TableCell price={volume} currnecy={curr} />
    </StyledExcangesBodyTr>
  );
};

export default ExcangesTbodyTr;
