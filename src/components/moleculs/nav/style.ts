import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 20rem;
  height: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) =>
    theme.isDark ? "var(--grey-dark-2)" : "var(--white)"};
  border-radius: 400px;
  overflow: hidden;
`;
