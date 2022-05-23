import styled from "styled-components";

export const StyledTable = styled.table`
  display: block;
  background-color: ${({ theme }) =>
    theme.isDark ? "var(--grey-dark-2)" : "var(--white)"};

  & > * {
    display: block;
    max-width: var(--screen-width-desktop);
    margin: 0 auto;
  }
`;
