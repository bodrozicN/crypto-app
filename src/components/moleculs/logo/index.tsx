import React from "react";
import { Heading } from "../../atoms";
import { StyledLogo } from "./style";

type Props = {
  value1: string;
  value2: string;
};

const Logo = ({ value1, value2 }: Props) => {
  return (
    <StyledLogo to="/">
      <Heading type="h6" title={value1} $isBold />
      <Heading type="h6" title={value2} />
    </StyledLogo>
  );
};

export default Logo;
