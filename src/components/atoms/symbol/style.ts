import styled, { css } from "styled-components";

interface ICoinSymbol {
  $type: "primary" | "secondary";
  $withDot?: boolean;
}

export const Wrapper = styled.div<ICoinSymbol>`
  font-family: boldFont;
  font-size: 1.5rem;
  ${({ $type, theme }) =>
    $type === "primary" &&
    css`
      color: ${theme.isDark ? "#fff" : "var(--grey-light-3)"};
      opacity: 0.5;
    `}

  ${({ $type, theme }) =>
    $type === "secondary" &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.isDark ? "#000" : "var(--blue)"};
      background-color: #fff;
      max-width: 4.3rem;
      height: 2.3rem;
    `}

    position: relative;

  ${({ $withDot, theme }) =>
    $withDot &&
    css`
      &::after {
        position: absolute;
        content: "";
        background-color: ${theme.isDark
          ? "#fff"
          : "var(--grey-light-3)"} !important;
        height: 3px;
        width: 3px;
        left: -20%;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
      }
    `}

  @media (max-width:768px) {
    font-size: 1.1rem;
  }
`;
