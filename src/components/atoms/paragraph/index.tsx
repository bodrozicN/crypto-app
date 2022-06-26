import React from "react";
import { Wrapper } from "./style";

export type ParagraphType = "bold" | "light" | "priceParagraph";

type Props = {
  title: unknown;
  type: ParagraphType;
};

const Paragraph = ({ type, title }: Props) => {
  return <Wrapper $type={type}>{title as string}</Wrapper>;
};

export default Paragraph;
