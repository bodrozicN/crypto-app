import React from "react";
import { StyledCoinsRow } from "./style";
import { TableHeading } from "../../../atoms";
import uniqid from "uniqid";

type Props = {
  tHeadContent: string[];
};

const CoinsHeadRow = ({ tHeadContent }: Props) => {
  return (
    <StyledCoinsRow>
      {tHeadContent.map((title) => (
        <TableHeading key={uniqid()} title={title} />
      ))}
    </StyledCoinsRow>
  );
};

export default CoinsHeadRow;
