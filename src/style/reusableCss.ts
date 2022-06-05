import { css } from "styled-components";
import img from "../img/heroImg.png";
import img2 from "../img/heroImg2.png";

export const Grid_12_col = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.5rem;
`;

export const Grid_9_col = css`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  column-gap: 1.5rem;
`;

export const Grid_7_col = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 1.5rem;
`;

export const ScreenWidth = css`
  max-width: var(--screen-width-desktop);
  margin: 0 auto;
`;

export const BackgroundImage = css`
  background-image: ${({ theme }) =>
    theme.isDark ? `url(${img2})` : `url(${img})`};
  background-color: rgb(0, 0, 0);
  background-position: center;
  background-size: cover;
`;

export const Background = css`
  background-color: ${({ theme }) =>
    theme.isDark ? "var(--grey-dark-2)" : "var(--white)"};
`;
