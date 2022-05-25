import styled from "styled-components";

export const StyledTableHeading = styled.th`
  font-family: lightFont;
  font-size: 1.5rem;
  color: ${({ theme }) =>
    theme.isDark ? "var(--white)" : "var(--grey-light-2)"};
  justify-self: start;
  cursor: default;
`;
