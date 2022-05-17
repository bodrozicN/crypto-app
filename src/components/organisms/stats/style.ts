import styled from "styled-components";

export const StyledStats = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  column-gap: 15px;
  row-gap: 4.8rem;

  & > *:nth-child(1),
  & > *:nth-child(4) {
    grid-column: 1 / 4;
  }
  & > *:nth-child(2),
  & > *:nth-child(5) {
    grid-column: 4 / 7;
  }
  & > *:nth-child(3),
  & > *:nth-child(6) {
    grid-column: 7 / -1;
  }
`;
