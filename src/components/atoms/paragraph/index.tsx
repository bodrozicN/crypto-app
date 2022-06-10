import React from "react";
import { StyledParagraph } from "./style";

export type ParagraphType = "bold" | "light" | "priceParagraph";

type Props = {
  title: unknown;
  type: ParagraphType;
};

const Paragraph = ({ type, title }: Props) => {
  return <StyledParagraph $type={type}>{title as string}</StyledParagraph>;
};

export default Paragraph;
