import styled, { css } from "styled-components";
import { OFontWeight } from "../../../types";
import { OSpan, TSpan } from "./";

interface ISpan {
  $type: TSpan;
}

export const StyledSpan = styled.span<ISpan>`
  font-size: 1.4rem;
  color: var(--white);
  cursor: default;
  // styleing for labels in hero section
  ${({ $type }) =>
    $type === OSpan.heroPrimary &&
    css`
      font-weight: ${OFontWeight.light};
    `}

  // styleing for values in hero section
  ${({ $type }) =>
    $type === OSpan.heroSecondary &&
    css`
      font-weight: ${OFontWeight.bold};
    `}

    // styleing for currency char in hero section
      ${({ $type }) =>
    $type === OSpan.heroTertiary &&
    css`
      color: var(--grey-light-1);
      font-weight: ${OFontWeight.bold};
    `}

    // styleing for labels in filter section
  ${({ $type, theme }) =>
    $type === OSpan.filterLabel &&
    css`
      display: block;
      font-weight: ${OFontWeight.light};
      color: ${theme.isDark ? "var(--white)" : "var(--grey-light-2)"};
      margin-left 0.3rem;
    `}
`;
