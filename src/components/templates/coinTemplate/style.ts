import styled from "styled-components";
import { Background, FlexPage, Grid_12_col, ScreenWidth } from "../../../style";

export const StyledCoinTemplate = styled.div`
  ${FlexPage}
  ${Background}

  & > *:nth-child(2) {
    padding-top: 7.8rem;
  }

  & > :nth-child(3) {
    ${Background}
    & > div {
      padding-top: 5.8rem;
      ${Grid_12_col};
      ${ScreenWidth};

      & > *:nth-child(1) {
        grid-column: 1/5;
      }

      & > *:nth-child(2) {
        grid-column: 6/-1;
      }
    }
  }
`;
