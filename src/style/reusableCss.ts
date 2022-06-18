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

export const FlexPage = css`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
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

export const TableRow_12_col = css`
  ${Grid_12_col}
  align-items: center;
  height: 9.8rem;

  & > *:nth-child(1) {
    grid-column: 1 / 2;
  }
  & > *:nth-child(2) {
    grid-column: 2 / 4;
  }
  & > *:nth-child(3) {
    grid-column: 4 / 5;
  }
  & > *:nth-child(4) {
    justify-self: center !important;
    grid-column: 5 / 7;
  }
  & > *:nth-child(5) {
    grid-column: 7 / 9;
  }
  & > *:nth-child(6) {
    grid-column: 9 / 11;
  }
  & > *:nth-child(7) {
    grid-column: 11 / -1;
  }
`;
