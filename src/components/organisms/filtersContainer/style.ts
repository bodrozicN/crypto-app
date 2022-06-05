import styled from "styled-components";
import { ScreenWidth, Grid_12_col } from "../../../style";

export const StyledFiltersContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.isDark ? "var(--grey-dark-1)" : "var(--grey-light-4)"};
  height: 12.5rem;
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
