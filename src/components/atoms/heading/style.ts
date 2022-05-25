import styled, { css } from "styled-components";

type IHeadingPrimary = {
  $isBold?: boolean;
};

const Header = css`
  color: var(--white);
  cursor: default;
`;

export const HeadingPrimary = styled.h1<IHeadingPrimary>`
  ${Header}
  font-family: ${({ $isBold }) => ($isBold ? "boldFont" : "lightFont")};
  font-weight: 400;
  font-size: 8rem;
`;
