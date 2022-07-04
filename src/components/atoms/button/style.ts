import styled, { css } from "styled-components";

interface IButton {
  $type: "chartButton" | "paginationButton" | "arrowButton" | "loginButton";
}

export const Wrapper = styled.button<IButton>`
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
  color: ${({ theme }) => (theme.isDark ? "#fff" : "#6D6D6D")};

  ${({ $type }) =>
    $type === "arrowButton" &&
    css`
      background-color: var(--grey-tertiary);
      font-size: 1.6rem;
    `}
  ${({ $type }) =>
    $type === "chartButton" &&
    css`
      font-size: 1.4rem;
    `}

    ${({ $type }) =>
    $type === "loginButton" &&
    css`
      background-color: #fff;
      color: #000;
      font-family: boldFont;
      height: 3.8rem;
      width: 100%;
      border-radius: 300px;
    `}

    @media (max-width:768px) {
    font-size: 1.3rem;
    height: 3rem;
    width: 3rem;
  }
`;
