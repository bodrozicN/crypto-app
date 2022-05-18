import styled from "styled-components";

export const StyledFiltersContainer = styled.div`
  height: 12.5rem;
  background-color: ${({ theme }) =>
    theme.isDark ? "var(--grey-dark-1)" : "var(--grey-light-4)"};
  & > div {
    margin: 0 auto;
    max-width: var(--screen-width-desktop);
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 15px;
    align-items: center;

    & > *:nth-child(1) {
      grid-column: 1 /4;
    }

    & > *:nth-child(2) {
      grid-column: 4 / -1;
    }
  }
`;
