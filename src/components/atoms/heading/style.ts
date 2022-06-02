import styled, { css } from "styled-components";

type IHeadingPrimary = {
  $isBold?: boolean;
};

const Header = css`
  color: var(--white);
`;

export const HeadingPrimary = styled.h1<IHeadingPrimary>`
  ${Header}
  cursor: default;
  font-family: ${({ $isBold }) => ($isBold ? "boldFont" : "lightFont")};
  font-weight: 400;
  font-size: 8rem;
  line-height: 100px;
`;

export const HeadingSenary = styled.h6<IHeadingPrimary>`
  ${Header}
  font-family: ${({ $isBold }) => ($isBold ? "boldFont" : "lightFont")};
  font-weight: 400;
  font-size: 1.6rem;
`;
