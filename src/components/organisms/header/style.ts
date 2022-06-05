import styled from "styled-components";
import img from "../../../img/heroImg.png";
import img2 from "../../../img/heroImg2.png";

export const StyledHeader = styled.header`
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);

  background-image: ${({ theme }) =>
    theme.isDark ? `url(${img2})` : `url(${img})`};
  background-color: rgb(0, 0, 0, 0.15);

  background-size: cover;
  background-position: top;

  & > div {
    position: relative;
    height: 6.8rem;
    margin: 0 auto;
    max-width: var(--screen-width-desktop);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    column-gap: 15px;

    & > *:nth-child(1) {
      grid-column: 1 / 2;
    }
    & > *:nth-child(2) {
      grid-column: 8 / 9;
    }
    & > *:nth-child(3) {
      grid-column: 11 / -1;
    }
  }
`;
