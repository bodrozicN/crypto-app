import styled from "styled-components";

export const StyledHomeHero = styled.div`
  background-color: rgb(var(--blue-primary));
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

    & > div:nth-child(3) {
      grid-row: 2 / 3;
      grid-column: 12 / -1;
      align-self: end;
      justify-self: end;
    }
  }
`;
