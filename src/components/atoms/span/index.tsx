import React from "react";
import { FilterLabel, HeroLabel, HeroValue, HeroChar } from "./style";

type LabelSpanProps = {
  type: "heroLabel" | "filterLabel" | "heroChar" | "heroValue";
  title: string | number;
};

type Props = LabelSpanProps;

const Span = (props: Props) => {
  switch (props.type) {
    case "heroLabel":
      return <HeroLabel role="span">{props.title}</HeroLabel>;
    case "filterLabel":
      return <FilterLabel role="span">{props.title}</FilterLabel>;
    case "heroChar":
      return <HeroChar role="span">{props.title}</HeroChar>;
    case "heroValue":
      return <HeroValue role="span">{props.title}</HeroValue>;
    default:
      throw new Error("Span type not found");
  }
};

export default Span;
