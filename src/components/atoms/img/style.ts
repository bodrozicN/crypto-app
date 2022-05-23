import styled from "styled-components";
import { ImgType } from "./index";

interface IStyledImg {
  $type: ImgType;
}

export const StyledImg = styled.img<IStyledImg>`
  border-radius: 50%;
  height: 4rem;
  width: 4rem;

  filter: ${({ theme }) =>
    theme.isDark
      ? "sepia(200%) hue-rotate(200deg) saturate(0%)"
      : "sepia(200%) hue-rotate(200deg) saturate(3000%)"};
`;
