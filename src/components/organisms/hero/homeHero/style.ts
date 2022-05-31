import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
`;

export const StyledHomeHero = styled.div`
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
