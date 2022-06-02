import styled, { css } from "styled-components";
import { ImgType } from "./index";

interface IStyledImg {
  $type: ImgType;
}

export const StyledImg = styled.img<IStyledImg>`
  border-radius: 50%;
  height: 4rem;
  width: 4rem;

  ${({ $type }) =>
    $type === "detailsImg" &&
    css`
      height: 5.5rem;
      width: 5.5rem;
    `}
`;
