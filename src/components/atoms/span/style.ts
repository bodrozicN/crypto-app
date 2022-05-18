import styled, { css } from "styled-components";
import { OFontWeight } from "../../../types";

const LabelSpan = css`
  font-size: 1.4rem;
  font-weight: ${OFontWeight.light};
  font-style: normal;
`;

export const HeroLabel = styled.span`
  ${LabelSpan}
  color: var(--white);
`;

export const FilterLabel = styled.span`
  ${LabelSpan}
  color: ${({ theme }) =>
    theme.isDark ? "var(--white)" : "var(--grey-light-2)"};
`;

const HeroSpanValue = css`
  font-size: 1.4rem;
  font-weight: ${OFontWeight.bold};
  font-style: normal;
`;

export const HeroValue = styled.span`
  ${HeroSpanValue}
  color: var(--white);
`;

export const HeroChar = styled.span`
  ${HeroSpanValue}
  color: var(--grey-light-1);
`;
