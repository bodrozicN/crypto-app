import React from "react";
import { ICoinListData } from "../../../interfaces";
import { TableBody, TableHead } from "../../organisms";
import { StyledTable } from "./style";

type Props = {
  coinsArr: ICoinListData[] | undefined;
};

const Table = ({ coinsArr }: Props) => {
  return (
    <StyledTable>
      <TableHead />
      <TableBody coinsArr={coinsArr} />
    </StyledTable>
  );
};

export default React.memo(Table);
