import styled from "styled-components";

export const StyledCoinHero = styled.div`
  height: 60.5rem;
  padding-top: 9rem;
  padding-bottom: 7.7rem;
  & > div {
    max-width: var(--screen-width-desktop);
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(130px, auto);
    column-gap: 15px;
    row-gap: 6.4rem;

    & > *:nth-child(1) {
      grid-column: 1 / 6;
    }

    & > *:nth-child(2) {
      grid-row: 2 / 3;
      grid-column: 1 / -1;
    }
    & > *:nth-child(3) {
      grid-column: 8 / -1;
    }
  }
`;
