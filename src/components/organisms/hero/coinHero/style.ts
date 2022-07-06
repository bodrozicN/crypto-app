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
      grid-column: 1 / 7;
    }

    & > *:nth-child(2) {
      grid-row: 2 / 3;
      grid-column: 1 / -1;
    }
    & > *:nth-child(3) {
      grid-column: 7 / -1;
    }
  }

  @media (max-width: 560px) {
    padding-top: 5rem;
    & > div {
      row-gap: 3rem;
      grid-auto-rows: minmax(90px, auto);
      & > *:nth-child(1) {
        grid-column: 1 / -1;
      }
      & > *:nth-child(2) {
        grid-row: 3 / 4;
        grid-column: 1 / -1;
      }

      & > *:nth-child(3) {
        grid-row: 2 / 3;
        grid-column: 1 / -1;
      }
    }
  }
`;
