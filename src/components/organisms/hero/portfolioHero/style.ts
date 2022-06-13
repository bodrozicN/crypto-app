import styled from "styled-components";
import { BackgroundImage, Grid_12_col, ScreenWidth } from "../../../../style";

export const StyledPortfolioHero = styled.section`
  ${BackgroundImage}
  height: 42rem;
  padding-top: 7.6rem;
  padding-bottom: 8rem;

  & > div {
    height: 100%;
    ${Grid_12_col}
    ${ScreenWidth}

    & > *:nth-child(1) {
      grid-column: 1 / 8;
    }
    & > *:nth-child(2) {
      margin-left: auto;
      grid-column: 8 / -1;
    }

    & > *:nth-child(3) {
      grid-column: 1 / 5;
      grid-row: 2 / 3;
      margin-top: auto;
    }
  }

  .value-container {
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
    & > *:nth-child(2) {
      margin-left: auto;
    }
  }
`;