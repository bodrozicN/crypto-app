import React from "react";
import { Wrapper } from "./style";

type Props = {
  title: unknown;
  $type: "primary" | "secondary";
  $withDot?: boolean;
};

const Symbol = ({ title, $type, $withDot }: Props) => {
  return <Wrapper {...{ $type, $withDot }}>{title as string}</Wrapper>;
};

export default Symbol;
