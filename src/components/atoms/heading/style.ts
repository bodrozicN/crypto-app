import styled, { css } from "styled-components";
import { OFontWeight } from "../../../types";

type IHeadingPrimary = {
  $isBold?: boolean;
};

const Header = css`
  color: var(--white);
  cursor: default;
`;

export const HeadingPrimary = styled.h1<IHeadingPrimary>`
  ${Header}
  font-size: 8rem;
  font-weight: ${({ $isBold }) =>
    $isBold ? OFontWeight.bold : OFontWeight.light};
`;
