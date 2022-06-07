import React from "react";
import { CoinExcanges } from "../../../types";
import { CoinOhlc, Table } from "../../organisms";
import { StyledCoinInfo } from "./style";

const CoinInfo = (props: CoinExcanges) => {
  return (
    <StyledCoinInfo>
      <div>
        <CoinOhlc />
        <Table type="excanges" {...props} />
      </div>
    </StyledCoinInfo>
  );
};

export default CoinInfo;
