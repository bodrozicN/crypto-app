import React from "react";
import { formatString } from "../../../../helpers";
import { PortfolioAsset, TCurrency } from "../../../../types";
import { TableCell } from "../../../moleculs";
import { StyledPortfolioTr } from "./styled";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "../../../atoms";

type Props = {
  item: PortfolioAsset;
  currency: TCurrency;
  handleDeleteCoin: (uuid: string | undefined) => void;
};

const PortfolioTbodyTr = ({ item, handleDeleteCoin }: Props) => {
  const { avgPrice, currentPrice, iconUrl, name, pool, rank, symbol, uuid } =
    item;

  return (
    <StyledPortfolioTr>
      <TableCell rank={rank} />
      <TableCell
        src={iconUrl}
        alt={name}
        name={formatString(name, 7, true)}
        symbol={symbol}
        uuid={uuid}
      />
      <TableCell
        currnecy={currentPrice[0]}
        price={currentPrice[1]}
        uuid={uuid}
      />
      <TableCell currnecy={pool[0]} price={pool[1]} uuid={uuid} $reverseOrder />
      <TableCell currnecy={avgPrice[0]} price={avgPrice[1]} uuid={uuid} />
      <TableCell
        price={`${avgPrice.join("")} / ${currentPrice.join("")}`}
        uuid={uuid}
      />
      <TableCell>
        <Button
          className="delete-btn"
          $type="arrowButton"
          onClick={() => {
            handleDeleteCoin(uuid);
          }}
        >
          <AiOutlineDelete />
        </Button>
      </TableCell>
    </StyledPortfolioTr>
  );
};

export default PortfolioTbodyTr;
