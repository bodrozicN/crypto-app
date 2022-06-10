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
  $switchColor?: boolean;
};

const Span = ({ content, type, $switchColor }: Props) => {
  return (
    <StyledSpan $type={type} $switchColor={$switchColor}>
      {content as string}
    </StyledSpan>
  );
};

export { Span, type TSpan, OSpan };
