import styled, { css } from "styled-components";
import { OSpan, TSpan } from "./";

function getCorrectColor($switchColor: boolean | undefined, isDark: boolean) {
  let color: string;
  if ($switchColor) color = isDark ? "white" : "#2c2c2c";
  else color = "white";
  return color;
}

interface ISpan {
  $type: TSpan;
  $switchColor?: boolean;
}

export const StyledSpan = styled.span<ISpan>`
  font-size: 1.4rem;
  color: var(--white);
  cursor: default;
  font-weight: 400;

  ${({ $switchColor, theme }) =>
    $switchColor &&
    css`
      color: ${getCorrectColor($switchColor, theme.isDark)} !important;
    `}

  // styling for labels in hero section
  ${({ $type, theme }) =>
    $type === OSpan.heroPrimary &&
    css`
      font-family: lightFont;
      color: white;
    `}

  // styleing for values in hero section
      ${({ $type }) =>
    $type === OSpan.heroSecondary &&
    css`
      font-family: boldFont;
    `}

    // styleing for currency char in hero section
      ${({ $type, theme }) =>
    $type === OSpan.heroTertiary &&
    css`
      color: var(--grey-light-1);
      font-family: boldFont;
    `}

    // styleing for labels in filter section
  ${({ $type, theme }) =>
    $type === OSpan.filterLabel &&
    css`
      display: block;
      font-family: lightFont;
      color: ${theme.isDark ? "var(--white)" : "var(--grey-light-2)"};
      margin-left 0.3rem;
    `}
`;
