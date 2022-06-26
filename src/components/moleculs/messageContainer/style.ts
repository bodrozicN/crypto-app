import styled from "styled-components";
import { Background, FlexPage, ScreenWidth } from "../../../style";

export const Wrapper = styled.div`
  ${Background}
  div {
    padding-top: 5rem;
    ${FlexPage}
    ${ScreenWidth}
  }
`;
