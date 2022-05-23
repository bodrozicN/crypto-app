import React from "react";
import { StyledTableHeading } from "./style";

type Props = {
  title: unknown;
};

const TableHeading = ({ title }: Props) => {
  return <StyledTableHeading>{title as string}</StyledTableHeading>;
};

export default TableHeading;
