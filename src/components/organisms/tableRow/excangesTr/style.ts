import styled, { css } from "styled-components";
import { Grid_7_col } from "../../../../style";

const TR = css`
  ${Grid_7_col}
  align-items: center;

  padding: 1.6rem 0;

  *:nth-child(1) {
    grid-column: 1 / 2;
  }
  *:nth-child(2) {
    grid-column: 2 / 4;
  }
  *:nth-child(3) {
    grid-column: 4 / 5;
  }
  *:nth-child(4) {
    grid-column: 5 / 6;
  }
  *:nth-child(5) {
    grid-column: 6 / -1;
  }

  @media (max-width: 425px) {
    *:nth-child(4) {
      display: none;
    }
  }
`;

export const StyledExcangesTr = styled.tr`
  ${TR}
  border-bottom: ${({ theme }) =>
    theme.isdark
      ? "1px solid rgb(255,255,255, 0.15)"
      : "1px solid rgb(44,31,40, 0.15)"};
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
    margin-left: auto;
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
  }
`;
