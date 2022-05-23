import styled from "styled-components";
import { OFontWeight } from "../../../types";

export const StyledCoinSymbol = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) =>
    theme.isDark ? "var(--white)" : "var(--grey-light-3)"};
  opacity: 0.5;
  font-weight: ${OFontWeight.bold};
  position: relative;
`;
