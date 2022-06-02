import styled from "styled-components";
import img from "../../../img/heroImg.png";
import img2 from "../../../img/heroImg2.png";

export const Wrapper = styled.div`
  background-image: ${({ theme }) =>
    theme.isDark ? `url(${img2})` : `url(${img})`};
  background-color: rgb(0, 0, 0);
  background-position: center;
  background-size: cover;
`;
