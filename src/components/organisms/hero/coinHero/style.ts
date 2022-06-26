import styled from "styled-components";
import { BackgroundImage, Grid_12_col, ScreenWidth } from "../../../../style";

export const Wrapper = styled.section`
  ${BackgroundImage};

  height: 60.5rem;
  padding-top: 9rem;
  padding-bottom: 7.7rem;
  & > div {
    ${Grid_12_col};
    ${ScreenWidth};
    grid-auto-rows: minmax(130px, auto);
    row-gap: 6.4rem;

    & > *:nth-child(1) {
      grid-column: 1 / 6;
    }

    & > *:nth-child(2) {
      grid-row: 2 / 3;
      grid-column: 1 / -1;
    }
    & > *:nth-child(3) {
      grid-column: 8 / -1;
    }
  }
`;
