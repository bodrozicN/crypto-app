import React from "react";
import { Heading } from "../../atoms";
import { Wrapper } from "./style";

type Props = {
  value1: unknown;
  value2: unknown;
};

const HeroHeading = ({ value1, value2 }: Props) => {
  return (
    <Wrapper>
      <Heading title={value1} type="h1" $isBold />
      <Heading title={value2} type="h1" />
    </Wrapper>
  );
};

export default HeroHeading;
