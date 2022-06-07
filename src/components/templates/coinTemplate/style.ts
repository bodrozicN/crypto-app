import styled from "styled-components";
import { Background, FlexPage } from "../../../style";

export const StyledCoinTemplate = styled.div`
  ${Background}
  ${FlexPage}
  
  & > *:nth-child(2) {
    padding-top: 7.8rem;
  }
  & > *:nth-child(3) {
    padding-top: 5.8rem;
  }
`;
