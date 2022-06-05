import styled from "styled-components";
import { Grid_9_col } from "../../../style";

export const StyledFilters = styled.div`
  ${Grid_9_col}

  & > *:nth-child(1) {
    grid-column: 1 / 4;
  }

  & > *:nth-child(2) {
    grid-column: 4 / 6;
  }

  & > *:nth-child(3) {
    grid-column: 6 / 8;
  }

  & > *:nth-child(4) {
    grid-column: 8 / -1;
  }
`;
