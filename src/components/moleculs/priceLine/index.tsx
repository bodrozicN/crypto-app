import React from "react";
import { StyledPriceLine } from "./style";
import { Svg } from "../../atoms";

type Props = {
  $percentage: number;
};

const PriceLine = (props: Props) => {
  return (
    <>
      <Svg />
      <StyledPriceLine {...props} />
    </>
  );
};

export default PriceLine;
