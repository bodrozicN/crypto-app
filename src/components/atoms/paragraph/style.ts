import styled, { css } from "styled-components";
import { ParagraphType } from "./index";

interface IParagraph {
  $type: ParagraphType;
}

export const Wrapper = styled.p<IParagraph>`
  font-family: ${({ $type }) => ($type === "bold" ? "boldFont" : "lightFont")};
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => (theme.isDark ? "#fff" : "var(--grey-primary)")};
  white-space: nowrap;
  cursor: default;
  ${({ $type }) =>
    $type === "priceParagraph" &&
    css`
      font-size: 3.6rem;
      font-family: boldFont;
    `}

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
