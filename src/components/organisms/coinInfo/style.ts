import styled from "styled-components";

export const StyledCoinInfo = styled.section`
  background-color: ${({ theme }) =>
    theme.isDark ? "var(--grey-dark-2)" : "var(--white)"};
  & > div {
    max-width: var(--screen-width-desktop);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 15px;

    & > *:nth-child(1) {
      grid-column: 1/5;
    }

    & > *:nth-child(2) {
      grid-column: 6/-1;
    }
  }
`;
