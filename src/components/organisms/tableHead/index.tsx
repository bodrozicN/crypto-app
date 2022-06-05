import React from "react";
import { ExcangesTheadTr, CoinsTheadTr } from "../../organisms";
import { Props } from "./types";

const TableHead = ({ theadContent, type }: Props) => {
  const TRow = type === "coins" ? CoinsTheadTr : ExcangesTheadTr;

  return (
    <thead>
      <TRow theadContent={theadContent} />
    </thead>
  );
};

export default TableHead;
