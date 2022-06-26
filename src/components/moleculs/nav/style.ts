import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 20rem;
  height: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) =>
    theme.isDark ? "var(--grey-quaternary)" : "#fff"};
  border-radius: 400px;
  overflow: hidden;
`;
