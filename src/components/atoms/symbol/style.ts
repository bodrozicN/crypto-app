import styled from "styled-components";

export const StyledCoinSymbol = styled.div`
  font-family: boldFont;
  font-size: 1.5rem;
  color: ${({ theme }) =>
    theme.isDark ? "var(--white)" : "var(--grey-light-3)"};
  opacity: 0.5;
  position: relative;
`;
