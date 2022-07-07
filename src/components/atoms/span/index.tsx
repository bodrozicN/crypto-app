import React from "react";
import { Wrapper } from "./style";

const OSpan = {
  heroPrimary: "heroPrimary",
  heroSecondary: "heroSecondary",
  filterLabel: "filterLabel",
  pinkSpan: "pinkSpan",
} as const;

type TSpan = typeof OSpan[keyof typeof OSpan];

type Props = {
  $type: TSpan;
  content: unknown;
  $switchColor?: boolean;
  className?: string;
};

const Span = (props: Props) => {
  return <Wrapper {...props}>{props.content as string}</Wrapper>;
};

export { Span, type TSpan, OSpan };
