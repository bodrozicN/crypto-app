import React from "react";
import { StyledCoinSymbol } from "./style";

type Props = {
  title: unknown;
  $type: "primary" | "secondary";
};

const Symbol = ({ title, $type }: Props) => {
  return <StyledCoinSymbol $type={$type}>{title as string}</StyledCoinSymbol>;
};

export default Symbol;
