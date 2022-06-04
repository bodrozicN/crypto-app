import React from "react";
import { CoinListData } from "../../../../types";
import { TCurrency } from "../../../../types";
import { CoinsTbody, CoinsThead } from "../../../organisms";
import { StyledTable } from "./style";

type Props = {
  coinsArr: CoinListData[] | undefined;
  currency: TCurrency;
  tHeadContent: string[];
};

const CoinsTable = (props: Props) => {
  return (
    <StyledTable>
      <CoinsThead tHeadContent={props.tHeadContent} />
      <CoinsTbody {...props} />
    </StyledTable>
  );
};

export default React.memo(CoinsTable);
