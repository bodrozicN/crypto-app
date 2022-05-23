import React from "react";
import { StyledHeadRow } from "./style";
import { TableHeading } from "../../../atoms";
import uniqid from "uniqid";

const headingContent = [
  "#",
  "Name",
  "Price",
  "7d Change",
  "Market Cap",
  "Volume",
  "Last 7d",
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
