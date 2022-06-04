import React from "react";
import { ExcangesDetails } from "../../../types";
import { CoinOhlc, ExcangesTable } from "../../organisms";
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
        <ExcangesTable theadContent={theadContent} excanges={excanges} />
      </div>
    </StyledCoinInfo>
  );
};

export default CoinInfo;
