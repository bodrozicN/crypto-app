import React from "react";
import { StyledCoinSymbol } from "./style";

type Props = {
  title: unknown;
};

const Symbol = ({ title }: Props) => {
  return <StyledCoinSymbol role="symbol">{title as string}</StyledCoinSymbol>;
};

export default Symbol;
