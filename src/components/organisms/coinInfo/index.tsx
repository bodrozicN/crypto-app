import React from "react";
import { ExcangesDetails } from "../../../types";
import { CoinOhlc, Table } from "../../organisms";
import { StyledCoinInfo } from "./style";

type Props = {
  theadContent: string[];
  excanges: ExcangesDetails[] | undefined;
};

const CoinInfo = ({ theadContent, excanges }: Props) => {
  return (
    <StyledCoinInfo>
      <div>
        <CoinOhlc />
        <Table
          type="excanges"
          theadContent={theadContent}
          excanges={excanges}
        />
      </div>
    </StyledCoinInfo>
  );
};

export default CoinInfo;
