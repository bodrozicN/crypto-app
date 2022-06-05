import styled from "styled-components";
import img from "../../../../img/heroImg.png";
import img2 from "../../../../img/heroImg2.png";

export const StyledHomeHero = styled.div`
  background-image: ${({ theme }) =>
    theme.isDark ? `url(${img2})` : `url(${img})`};
  background-color: rgb(0, 0, 0);
  background-position: bottom;
  background-size: cover;

  height: 43rem;
  padding-top: 4.8rem;
  padding-bottom: 8rem;
  & > div {
    max-width: var(--screen-width-desktop);
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(100px, auto);
    column-gap: 15px;
    row-gap: 6.4rem;

    & > div:nth-child(1) {
      align-self: start;
      grid-column: 1 / 5;
    }

    & > div:nth-child(2) {
      grid-row: 2 / 3;
      grid-column: 1 / 10;
    }
  }
`;
