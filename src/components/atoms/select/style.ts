import styled, { css } from "styled-components";
import { OFontWeight } from "../../../types";

const Select = css`
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: ${OFontWeight.bold};
  background-color: transparent;
  border: none;
  outline: none;
`;

export const HeroSelect = styled.select`
  ${Select}
  width: 7.5rem;
  color: var(--white);
`;

export const BodySelect = styled.select`
  ${Select}
  width: 10.5rem;
  color: ${({ theme }) =>
    theme.isDark ? "var(--white)" : "rgb(var(--blue-primary))"};
`;
