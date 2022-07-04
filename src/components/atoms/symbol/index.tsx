import React from "react";
import { Wrapper } from "./style";

type Props = {
  title: unknown;
  $type: "primary" | "secondary";
  $withDot?: boolean;
  className?: string;
};

const Symbol = ({ title, $type, $withDot, className }: Props) => {
  return (
    <Wrapper {...{ $type, $withDot, className }}>{title as string}</Wrapper>
  );
};

export default Symbol;
