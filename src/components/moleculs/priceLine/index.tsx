import React from "react";
import { Wrapper } from "./style";
import { Svg } from "../../atoms";

type Props = {
  $percentage: number;
};

const PriceLine = (props: Props) => {
  return (
    <>
      <Svg />
      <Wrapper {...props} />
    </>
  );
};

export default PriceLine;
