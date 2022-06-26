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
  type: TSpan;
  content: unknown;
  $switchColor?: boolean;
};

const Span = ({ content, type, $switchColor }: Props) => {
  return (
    <Wrapper $type={type} $switchColor={$switchColor}>
      {content as string}
    </Wrapper>
  );
};

export { Span, type TSpan, OSpan };
