import React from "react";
import { Link } from "react-router-dom";
import { Paragraph, Symbol, Img, Chart } from "../../atoms";
import { StyledTableCell } from "./styled";
import { ChratProps } from "../../../types";

type Props = {
  rank?: string | number;
  src?: string;
  alt?: string;
  name?: string;
  symbol?: string;
  price?: string;
  currnecy?: string;
  $reverseOrder?: boolean;
  uuid: string;
  chartData?: ChratProps;
};

const TableCell = ({
  rank,
  alt,
  currnecy,
  name,
  price,
  src,
  symbol,
  $reverseOrder,
  uuid,
  chartData,
}: Props) => {
  return (
    <StyledTableCell $reverseOrder={$reverseOrder}>
      <Link to={`coin/${uuid}`}>
        {rank && <Paragraph type="light" title={rank} />}
        {src && <Img type="tableImg" src={src} alt={alt} />}
        {name && <Paragraph type="bold" title={name} />}
        {symbol && <Symbol title={symbol} />}
        <span>
          {currnecy && <Symbol title={currnecy} />}
          {price && <Paragraph type="bold" title={price} />}
        </span>
        {chartData && <Chart {...chartData} />}
      </Link>
    </StyledTableCell>
  );
};

export default TableCell;
