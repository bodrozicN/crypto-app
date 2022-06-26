import styled from "styled-components";
import { Grid_9_col } from "../../../../style";

export const Wrapper = styled.div`
  ${Grid_9_col}
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
