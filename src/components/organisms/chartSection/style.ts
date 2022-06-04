import styled from "styled-components";

export const StyledChartSection = styled.section`
  background-color: ${({ theme }) =>
    theme.isDark ? "var(--grey-dark-2)" : "var(--white)"};
  padding-top: 7.5rem;
  & > div {
    margin: 0 auto;
    max-width: var(--screen-width-desktop);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
