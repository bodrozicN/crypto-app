import styled, { css } from "styled-components";

type IHeadingPrimary = {
  $isBold?: boolean;
};

const Header = css<IHeadingPrimary>`
  color: var(--white);
  font-family: ${({ $isBold }) => ($isBold ? "boldFont" : "lightFont")};
  cursor: default;
`;

export const HeadingPrimary = styled.h1`
  ${Header}
  font-size: 8rem;
  line-height: 100px;
`;

export const HeadingQuaternary = styled.h4`
  ${Header}
  color: ${({ theme }) =>
    theme.isDark ? "var(--white)" : "var(--grey-dark-2)"};
  font-size: 2.4rem;
`;

export const HeadingSenary = styled.h6`
  ${Header}
  font-size: 1.6rem;
`;
