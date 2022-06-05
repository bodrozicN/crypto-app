import styled, { css } from "styled-components";
import { Grid_7_col } from "../../../../style";

const TR = css`
  ${Grid_7_col}
  align-items: center;
  padding-bottom: 3.2rem;

  *:nth-child(1) {
    grid-column: 1 / 2;
  }
  *:nth-child(2) {
    grid-column: 2 / 3;
  }
  *:nth-child(3) {
    grid-column: 3 / 4;
  }
  *:nth-child(4) {
    grid-column: 4 / 5;
  }
  *:nth-child(5) {
    grid-column: 5 / 7;
  }
  *:nth-child(6) {
    grid-column: 7 / -1;
  }
`;

export const StyledExcangesTr = styled.tr`
  ${TR}
  th:nth-child(2) {
    margin-left: -1.5rem;
  }
  th:nth-child(3) {
    justify-self: center;
  }
  th:nth-child(4) {
    justify-self: end;
    margin-right: -1.5rem;
  }
  th:nth-child(5) {
    margin-left: 9.5rem;
  }
  th:nth-child(6) {
  }
`;

export const StyledExcangesBodyTr = styled.tr`
  ${TR}

  td:nth-child(2) {
    margin-left: -1.5rem;
  }
  td:nth-child(3) {
    justify-self: center;
  }
  td:nth-child(4) {
    justify-self: end;
  }
  td:nth-child(5) {
    justify-self: end;
    margin-right: 6rem;
  }
  td:nth-child(6) {
    justify-self: end;
  }
`;
