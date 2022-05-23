import styled, { css } from "styled-components";
import { ParagraphType } from "./index";
import { OFontWeight } from "../../../types";

interface IStyledParagraph {
  $type: ParagraphType;
}

export const StyledParagraph = styled.p<IStyledParagraph>`
  font-size: 1.5rem;
  color: ${({ theme }) =>
    theme.isDark ? "var(--white)" : "var(--grey-light-2)"};

  ${({ $type }) =>
    $type === "bold" &&
    css`
      font-weight: ${OFontWeight.bold};
    `}
`;
