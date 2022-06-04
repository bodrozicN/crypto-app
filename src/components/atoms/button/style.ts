import styled, { css } from "styled-components";

interface IStyledButton {
  $type: "chartButton";
}

export const StyledButton = styled.button<IStyledButton>`
  cursor: pointer;
  font-family: lightFont;
  font-size: 1.4rem;
  border: none;
  ${({ $type, theme }) =>
    $type === "chartButton" &&
    css`
      border-radius: 50%;
      background-color: transparent;
      color: ${theme.isDark ? "var(--white)" : "#6D6D6D"};
      height: 100%;
      width: 100%;
    `}
`;
