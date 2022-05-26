import React from "react";
import { CoinListData } from "../../../types";
import { TCurrency } from "../../../types";
import { TableBody, TableHead } from "../../organisms";
import { StyledTable } from "./style";

type Props = {
  coinsArr: CoinListData[] | undefined;
  currency: TCurrency;
};

const Table = (props: Props) => {
  return (
    <StyledTable>
      <TableHead />
      <TableBody {...props} />
    </StyledTable>
  );
};

export default React.memo(Table);
