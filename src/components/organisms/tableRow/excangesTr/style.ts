import styled from "styled-components";

export const StyledExcangesTr = styled.tr`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 15px;
  padding-bottom: 3.2rem;

  th:nth-child(1) {
    grid-column: 1 / 2;
  }
  th:nth-child(2) {
    grid-column: 2 / 3;
    margin-left: -1.5rem;
  }
  th:nth-child(3) {
    grid-column: 3 / 4;
    justify-self: center;
  }
  th:nth-child(4) {
    grid-column: 4 / 5;
    justify-self: end;
    margin-right: -1.5rem;
  }
  th:nth-child(5) {
    grid-column: 5 / 7;
    margin-left: 9.5rem;
  }
  th:nth-child(6) {
    grid-column: 7 / -1;
  }
`;

export const StyledExcangesBodyTr = styled.tr`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 15px;

  padding-bottom: 3.2rem;

  td:nth-child(1) {
    grid-column: 1 / 2;
  }
  td:nth-child(2) {
    grid-column: 2 / 3;
    margin-left: -1.5rem;
  }
  td:nth-child(3) {
    grid-column: 3 / 4;
    justify-self: center;
  }
  td:nth-child(4) {
    grid-column: 4 / 5;
    justify-self: end;
  }
  td:nth-child(5) {
    grid-column: 5 / 7;
    justify-self: end;
    margin-right: 6rem;
  }
  td:nth-child(6) {
    grid-column: 7 / -1;
    justify-self: end;
  }
`;
