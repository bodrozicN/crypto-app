import styled from "styled-components";
import { Background, Grid_12_col, ScreenWidth } from "../../../style";

export const StyledCoinInfo = styled.section`
  ${Background}
  & > div {
    ${Grid_12_col};
    ${ScreenWidth};

    & > *:nth-child(1) {
      grid-column: 1/5;
    }

    & > *:nth-child(2) {
      grid-column: 6/-1;
    }
  }
`;
