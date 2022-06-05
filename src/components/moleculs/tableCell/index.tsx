import React from "react";
import { Paragraph, Symbol, Img, Chart } from "../../atoms";
import { StyledTableCell } from "./style";
import { Props } from "./types";

const TableCell = ({
  rank,
  alt,
  currnecy,
  name,
  price,
  src,
  symbol,
  $reverseOrder,
  chartData,
}: Props) => {
  return (
    <StyledTableCell $reverseOrder={$reverseOrder}>
      {rank && <Paragraph type="light" title={rank} />}
      {src && <Img type="tableImg" src={src} alt={alt} />}
      {name && <Paragraph type="bold" title={name} />}
      {symbol && <Symbol $type="primary" title={symbol} />}
      <span>
        {currnecy && <Symbol $type="primary" title={currnecy} />}
        {price && <Paragraph type="bold" title={price} />}
      </span>
      {chartData && <Chart type="homePageChart" priceHistory={chartData} />}
    </StyledTableCell>
  );
};

export default TableCell;
