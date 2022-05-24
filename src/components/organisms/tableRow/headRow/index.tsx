import React from "react";
import { StyledHeadRow } from "./style";
import { TableHeading } from "../../../atoms";
import uniqid from "uniqid";

const headingContent = [
  "#",
  "Name",
  "Price",
  "Change",
  "Market Cap",
  "Volume",
  "Sparkline",
];

const HeadRow = () => {
  return (
    <StyledHeadRow>
      {headingContent.map((title) => (
        <TableHeading key={uniqid()} title={title} />
      ))}
    </StyledHeadRow>
  );
};

export default HeadRow;
