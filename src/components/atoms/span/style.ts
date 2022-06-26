import styled, { css } from "styled-components";
import { OSpan, TSpan } from "./";

function getCorrectColor($switchColor: boolean | undefined, isDark: boolean) {
  let color: string;
  if ($switchColor) color = isDark ? "#fff" : "#2c2c2c";
  else color = "#fff";
  return color;
}

interface ISpan {
  $type: TSpan;
  $switchColor?: boolean;
}

export const Wrapper = styled.span<ISpan>`
  font-size: 1.4rem;
  color: #fff;
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
      color: #fff;
    `}

  // styleing for values in hero section
      ${({ $type }) =>
    $type === OSpan.heroSecondary &&
    css`
      font-family: boldFont;
    `}

    // styleing for labels in filter section
  ${({ $type, theme }) =>
    $type === OSpan.filterLabel &&
    css`
      display: block;
      font-family: lightFont;
      color: ${theme.isDark ? "#fff" : "var(--grey-primary)"};
      margin-left 0.3rem;
    `}

    ${({ $type }) =>
    $type === OSpan.pinkSpan &&
    css`
      font-family: boldFont;
      color: #df1c9c;
      font-size: 1.5rem;
    `}
`;
