import React from "react";
import { HeadingPrimary } from "./style";
import { TFontWeight } from "../../../types";

type HeadingPrimaryProps = {
  title: string | number;
  type: "h1";
  weight: TFontWeight;
};

type Props = HeadingPrimaryProps;

const Heading = (props: Props) => {
  switch (props.type) {
    case "h1":
      return (
        <HeadingPrimary weight={props.weight}>{props.title}</HeadingPrimary>
      );
    default:
      throw new Error("Heading type not supported");
  }
};

export default Heading;
