import styled, { css } from "styled-components";

interface IStyledButton {
  $type: "chartButton" | "paginationButton" | "arrowButton";
}

export const StyledButton = styled.button<IStyledButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: lightFont;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  height: 100%;
  width: 100%;
  height: 4rem;
  width: 4rem;
  color: ${({ theme }) => (theme.isDark ? "var(--white)" : "#6D6D6D")};

  ${({ $type }) =>
    $type === "arrowButton" &&
    css`
      background-color: #292929;
      font-size: 1.6rem;
    `}
  ${({ $type }) =>
    $type === "chartButton" &&
    css`
      font-size: 1.4rem;
    `}
`;
