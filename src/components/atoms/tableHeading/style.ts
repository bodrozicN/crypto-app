import styled from "styled-components";

export const Wrapper = styled.th`
  font-family: lightFont;
  font-size: 1.5rem;
  color: ${({ theme }) => (theme.isDark ? "#fff" : "var(--grey-primary)")};
  justify-self: start;
  cursor: default;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
