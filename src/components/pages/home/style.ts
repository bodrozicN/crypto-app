import styled from "styled-components";
import img from "../../../img/heroImg.png";

export const Wrapper = styled.div`
  background-image: url(${img});
  background-color: rgb(0, 0, 0);
  background-position: center;
  background-size: cover;

  & > *:first-child {
    background-color: rgb(255, 255, 255, 0.15);
  }
`;
