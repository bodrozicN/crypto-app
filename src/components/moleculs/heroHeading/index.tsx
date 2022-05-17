import React from "react";
import { Heading } from "../../atoms";
import { StyledHeadingHero } from "./style";
import { OFontWeight } from "../../../types";

type Props = {
  value1: string | number;
  value2: string | number;
};

const HeroHeading = ({ value1, value2 }: Props) => {
  return (
    <StyledHeadingHero role="heroheading">
      <Heading title={value1} type="h1" weight={OFontWeight.bold} />
      <Heading title={value2} type="h1" weight={OFontWeight.light} />
    </StyledHeadingHero>
  );
};

export default HeroHeading;