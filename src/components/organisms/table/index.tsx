import React from "react";
import TableBody from "../tableBody";
import TableHead from "../tableHead";
import { StyledTable } from "./style";
import { Props } from "./types";

const Table = (props: Props) => {
  switch (props.type) {
    case "coins":
      return (
        <StyledTable>
          <TableHead type="coins" theadContent={props.tableHead} />
          <TableBody
            type="coins"
            items={props.coinsArr}
            currency={props.currency}
          />
        </StyledTable>
      );
    case "excanges":
      return (
        <StyledTable>
          <TableHead type="excanges" theadContent={props.tableHead} />
          <TableBody
            type="excanges"
            currency={props.currency}
            items={props.excanges}
          />
        </StyledTable>
      );

    case "portfolio":
      return (
        <StyledTable>
          <TableHead type="coins" theadContent={props.tableHead} />
          <TableBody
            type="portfolio"
            items={props.coinsArr}
            currency={props.currency}
            handleDeleteCoin={props.handleDeleteCoin}
          />
        </StyledTable>
      );
  }
};

export default React.memo(Table);
