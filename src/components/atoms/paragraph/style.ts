import styled from "styled-components";
import { ParagraphType } from "./index";

interface IStyledParagraph {
  $type: ParagraphType;
}

export const StyledParagraph = styled.p<IStyledParagraph>`
  font-family: ${({ $type }) => ($type === "bold" ? "boldFont" : "lightFont")};
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) =>
    theme.isDark ? "var(--white)" : "var(--grey-light-2)"};
  white-space: nowrap;
`;
