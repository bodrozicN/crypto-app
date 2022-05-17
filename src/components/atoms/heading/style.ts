import styled, { css } from "styled-components";
import { TFontWeight } from "../../../types";

type IHeadingPrimary = {
  weight: TFontWeight;
};

const Header = css`
  color: var(--white);
  cursor: default;
`;

export const HeadingPrimary = styled.h1<IHeadingPrimary>`
  ${Header}
  font-size: 8rem;
  font-weight: ${({ weight }) => weight};
`;
