import styled from "styled-components";

export const StyledFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);

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
