import React from "react";
import { TableHeading } from "../../../atoms";
import { StyledPortfolioTr } from "./styled";
import uniqid from "uniqid";

type Props = {
  theadContent: string[];
};

const PortfolioTheadTr = ({ theadContent }: Props) => {
  return (
    <StyledPortfolioTr>
      {theadContent.map((title) => (
        <TableHeading key={uniqid()} title={title} />
      ))}
    </StyledPortfolioTr>
  );
};

export default PortfolioTheadTr;
