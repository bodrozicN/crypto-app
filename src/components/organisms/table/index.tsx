import TableBody from "../tableBody";
import TableHead from "../tableHead";
import { StyledTable } from "./style";
import { Props } from "./types";

const Table = (props: Props) => {
  switch (props.type) {
    case "coins":
      return (
        <StyledTable>
          <TableHead type="coins" theadContent={props.theadContent} />
          <TableBody
            type="coins"
            coinsArr={props.coinsArr}
            currency={props.currency}
          />
        </StyledTable>
      );
    case "excanges":
      return (
        <StyledTable>
          <TableHead type="excanges" theadContent={props.theadContent} />
          <TableBody type="excanges" excanges={props.excanges} />
        </StyledTable>
      );
  }
};

export default Table;
