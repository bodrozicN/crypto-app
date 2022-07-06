import styled, { css } from "styled-components";
import { ImgType } from "./index";

interface IImg {
  $type: ImgType;
}

export const Wrapper = styled.img<IImg>`
  border-radius: 50%;
  height: 4rem;
  width: 4rem;

  ${({ $type }) =>
    $type === "detailsImg" &&
    css`
      height: 5.5rem;
      width: 5.5rem;
    `}

  @media (max-width: 560px) {
    /* height: 3rem;
    width: 3rem; */
  }
`;
