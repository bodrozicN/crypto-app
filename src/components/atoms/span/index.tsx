import React from "react";
import { StyledSpan } from "./style";

const OSpan = {
  heroPrimary: "heroPrimary",
  heroSecondary: "heroSecondary",
  heroTertiary: "heroTertiary",
  filterLabel: "filterLabel",
} as const;

type TSpan = typeof OSpan[keyof typeof OSpan];

type Props = {
  type: TSpan;
  content: unknown;
};

const Span = ({ content, type }: Props) => {
  return (
    <StyledSpan role="span" $type={type}>
      {content as string}
    </StyledSpan>
  );
};

export { Span, type TSpan, OSpan };
