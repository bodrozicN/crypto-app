import styled from "styled-components";
import { Grid_12_col, ScreenWidth, BackgroundImage } from "../../../../style";

export const Wrapper = styled.section`
  ${BackgroundImage};
  height: 43rem;
  padding-top: 4.8rem;
  padding-bottom: 8rem;

  & > div {
    ${Grid_12_col};
    ${ScreenWidth};
    grid-auto-rows: minmax(100px, auto);
    row-gap: 6.4rem;

    & > div:nth-child(1) {
      align-self: start;
      grid-column: 1 / 5;
    }

    & > div:nth-child(2) {
      grid-row: 2 / 3;
      grid-column: 1 / 10;
    }
  }

  @media (max-width: 560px) {
    & > div {
      & > div:nth-child(2) {
        grid-column: 1 / -1;
        column-gap: 0.5;
      }
    }
  }
`;
