import React from "react";
import { Wrapper } from "./style";

type Props = {
  title: unknown;
};

const TableHeading = ({ title }: Props) => {
  return <Wrapper>{title as string}</Wrapper>;
};

export default TableHeading;
