import styled from "styled-components";

export const StyledCoinsRow = styled.tr`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 15px;
  height: 9.8rem;

  & > *:nth-child(1) {
    grid-column: 1 / 2;
  }
  & > *:nth-child(2) {
    grid-column: 2 / 4;
  }
  & > *:nth-child(3) {
    grid-column: 4 / 5;
  }
  & > *:nth-child(4) {
    justify-self: center !important;
    grid-column: 5 / 7;
  }
  & > *:nth-child(5) {
    grid-column: 7 / 9;
  }
  & > *:nth-child(6) {
    grid-column: 9 / 11;
  }
  & > *:nth-child(7) {
    grid-column: 11 / -1;
  }
`;
