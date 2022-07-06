import styled, { css } from "styled-components";

type IHeadingPrimary = {
  $isBold?: boolean;
};

const Header = css<IHeadingPrimary>`
  color: #fff;
  font-family: ${({ $isBold }) => ($isBold ? "boldFont" : "lightFont")};
`;

export const HeadingPrimary = styled.h1`
  ${Header}
  font-size: 8rem;
  line-height: 100px;
  cursor: default;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }
`;

export const HeadingQuaternary = styled.h4`
  ${Header}
  cursor: default;
  color: ${({ theme }) => (theme.isDark ? "#fff" : "var(--grey-quaternary)")};
  font-size: 2.4rem;
`;

export const HeadingSenary = styled.h6`
  ${Header}
  font-size: 1.6rem;
`;
