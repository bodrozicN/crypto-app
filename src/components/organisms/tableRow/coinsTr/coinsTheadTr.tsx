import React from "react";
import { StyledCoinsHeadRow } from "./style";
import { TableHeading } from "../../../atoms";
import uniqid from "uniqid";

type Props = {
  theadContent: string[];
};

const CoinsHeadRow = ({ theadContent }: Props) => {
  return (
    <StyledCoinsHeadRow>
      {theadContent.map((title) => (
        <TableHeading key={uniqid()} title={title} />
      ))}
    </StyledCoinsHeadRow>
  );
};

export default CoinsHeadRow;
