import styled from "styled-components";
import { Background } from "../../../style";

export const StyledCoinTemplate = styled.div`
  ${Background}
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > *:nth-child(2) {
    padding-top: 7.8rem;
  }
  & > *:nth-child(3) {
    padding-top: 5.8rem;
  }
`;
