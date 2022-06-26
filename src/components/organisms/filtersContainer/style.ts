import styled from "styled-components";
import { ScreenWidth, Grid_12_col } from "../../../style";

export const Wrapper = styled.section`
  background: ${({ theme }) =>
    theme.isDark ? "var(--grey-tertiary)" : "var(--grey-secondary)"};
  height: 12.5rem;
  transition: background 0.2s;
  & > div {
    ${ScreenWidth};
    ${Grid_12_col};
    align-items: center;
    height: 100%;

    & > *:nth-child(1) {
      grid-column: 1 /4;
    }

    & > *:nth-child(2) {
      grid-column: 4 / -1;
    }
  }
`;
