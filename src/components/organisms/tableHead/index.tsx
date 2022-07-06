import React from "react";
import {
  ExcangesTheadTr,
  CoinsTheadTr,
  PortfolioTheadTr,
} from "../../organisms";
import { Props } from "./types";

const TableHead = ({ theadContent, type }: Props) => {
  const TRow =
    type === "coins"
      ? CoinsTheadTr
      : type === "excanges"
      ? ExcangesTheadTr
      : PortfolioTheadTr;

  return (
    <thead>
      <TRow theadContent={theadContent} />
    </thead>
  );
};

export default TableHead;
