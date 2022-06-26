import React from "react";
import { Heading } from "../../atoms";
import { Wrapper } from "./style";

type Props = {
  value1: unknown;
  value2: unknown;
};

const Logo = ({ value1, value2 }: Props) => {
  return (
    <Wrapper to="/">
      <Heading type="h6" title={value1} $isBold />
      <Heading type="h6" title={value2} />
    </Wrapper>
  );
};

export default Logo;
