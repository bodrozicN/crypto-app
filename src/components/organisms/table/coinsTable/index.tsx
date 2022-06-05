import React from "react";
import { CoinListData } from "../../../../types";
import { TCurrency } from "../../../../types";
import { CoinsTbody, CoinsThead } from "../../../organisms";
import { StyledCoinsTable } from "./style";

type Props = {
  coinsArr: CoinListData[] | undefined;
  currency: TCurrency;
  tHeadContent: string[];
};

const CoinsTable = (props: Props) => {
  return (
    <StyledCoinsTable>
      <CoinsThead tHeadContent={props.tHeadContent} />
      <CoinsTbody {...props} />
    </StyledCoinsTable>
  );
};

export default React.memo(CoinsTable);
