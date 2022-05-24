import React from "react";
import { ICoinListData } from "../../../interfaces";
import { TCurrency } from "../../../types";
import { TableBody, TableHead } from "../../organisms";
import { StyledTable } from "./style";

type Props = {
  coinsArr: ICoinListData[] | undefined;
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
