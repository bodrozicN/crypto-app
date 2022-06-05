import styled from "styled-components";
import { Grid_12_col, BackgroundImage, ScreenWidth } from "../../../style";

export const StyledHeader = styled.header`
  ${BackgroundImage}
  background-position: top;
  background-color: rgb(0, 0, 0, 0.15);
  border-bottom: 1px solid rgb(255, 255, 255, 0.15);

  & > div {
    ${ScreenWidth};
    ${Grid_12_col};
    align-items: center;
    position: relative;
    height: 6.8rem;

    & > *:nth-child(1) {
      grid-column: 1 / 2;
    }
    & > *:nth-child(2) {
      grid-column: 8 / 9;
    }
    & > *:nth-child(3) {
      grid-column: 11 / -1;
    }
  }
`;
