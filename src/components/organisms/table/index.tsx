import React from "react";
import TableBody from "../tableBody";
import TableHead from "../tableHead";
import { Wrapper } from "./style";
import { Props } from "./types";

const Table = (props: Props) => {
  switch (props.type) {
    case "coins":
      return (
        <Wrapper>
          <TableHead type="coins" theadContent={props.tableHead} />
          <TableBody
            type="coins"
            items={props.coinsArr}
            currency={props.currency}
          />
        </Wrapper>
      );
    case "excanges":
      return (
        <Wrapper>
          <TableHead type="excanges" theadContent={props.tableHead} />
          <TableBody
            type="excanges"
            currency={props.currency}
            items={props.excanges}
          />
        </Wrapper>
      );

    case "portfolio":
      return (
        <Wrapper>
          <TableHead type="coins" theadContent={props.tableHead} />
          <TableBody
            type="portfolio"
            items={props.coinsArr}
            currency={props.currency}
            handleDeleteCoin={props.handleDeleteCoin}
          />
        </Wrapper>
      );
  }
};

export default React.memo(Table);
