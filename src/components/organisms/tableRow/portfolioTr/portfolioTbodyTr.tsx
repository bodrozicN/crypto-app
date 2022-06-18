import React from "react";
import { PortfolioAsset, TCurrency } from "../../../../types";
import { TableCell } from "../../../moleculs";
import { StyledTr } from "./styled";

type Props = {
  item: PortfolioAsset;
  currency: TCurrency;
  handleDeleteCoin: (uuid: string | undefined) => void;
};

const PortfolioTbodyTr = ({ item, handleDeleteCoin }: Props) => {
  const { avgPrice, currentPrice, iconUrl, name, pool, rank, symbol, uuid } =
    item;

  return (
    <StyledTr>
      <TableCell rank={rank} />
      <TableCell src={iconUrl} alt={name} name={name} symbol={symbol} />
      <TableCell currnecy={currentPrice[0]} price={currentPrice[1]} />
      <TableCell currnecy={pool[0]} price={pool[1]} $reverseOrder />
      <TableCell currnecy={avgPrice[0]} price={avgPrice[1]} />
      <TableCell price={`${avgPrice[1]}/${currentPrice[1]}`} />
      <TableCell>
        <button
          onClick={() => {
            handleDeleteCoin(uuid);
          }}
        >
          delete
        </button>
      </TableCell>
    </StyledTr>
  );
};

export default PortfolioTbodyTr;
