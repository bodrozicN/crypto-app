import React from "react";
import { useNavigate } from "react-router-dom";
import { Paragraph, Symbol, Img, Chart } from "../../atoms";
import { Wrapper } from "./style";
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
  children,
  uuid,
}: Props) => {
  const navigate = useNavigate();

  return (
    <Wrapper $reverseOrder={$reverseOrder}>
      {children ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {children}
        </div>
      ) : (
        <div
          // do not change route if uuid is not provided
          onClick={() => {
            uuid && window.scrollTo(0, 0);
            uuid && navigate(`/coin/${uuid}`);
          }}
        >
          {rank && <Paragraph type="light" title={rank} />}
          {src && <Img type="tableImg" src={src} alt={alt} />}
          {name && <Paragraph type="bold" title={name} />}
          {symbol && <Symbol $type="primary" $withDot title={symbol} />}
          <span>
            {currnecy && <Symbol $type="primary" title={currnecy} />}
            {price && <Paragraph type="bold" title={price} />}
          </span>
          {chartData && <Chart type="homePageChart" priceHistory={chartData} />}
        </div>
      )}
    </Wrapper>
  );
};

export default TableCell;
