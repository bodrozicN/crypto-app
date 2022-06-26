import styled from "styled-components";
import { BackgroundImage } from "../../../style";

export const Wrapper = styled.div`
  position: relative;
  ${BackgroundImage}
  height: 91vh;

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > *:nth-child(1) {
      margin-bottom: 4rem;
    }
  }
`;
