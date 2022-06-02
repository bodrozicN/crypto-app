import styled, { css } from "styled-components";

interface ICoinSymbolProps {
  $type: "primary" | "secondary";
}

export const StyledCoinSymbol = styled.div<ICoinSymbolProps>`
  font-family: boldFont;
  font-size: 1.5rem;
  ${({ $type, theme }) =>
    $type === "primary" &&
    css`
      color: ${theme.isDark ? "var(--white)" : "var(--grey-light-3)"};
      opacity: 0.5;
    `}

  ${({ $type, theme }) =>
    $type === "secondary" &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.isDark ? "#000" : "rgb(var(--blue-primary))"};
      background-color: white;
      max-width: 4.3rem;
      height: 2.3rem;
    `}
`;
