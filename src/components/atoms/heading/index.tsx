import React from "react";
import { HeadingPrimary, HeadingSenary } from "./style";

type HeadingPrimaryProps = {
  title: unknown;
  type: "h1" | "h6";
  $isBold?: boolean;
};

type Props = HeadingPrimaryProps;

const Heading = (props: Props) => {
  switch (props.type) {
    case "h1":
      return (
        <HeadingPrimary $isBold={props.$isBold}>
          {props.title as string}
        </HeadingPrimary>
      );
    case "h6":
      return (
        <HeadingSenary $isBold={props.$isBold}>
          {props.title as string}
        </HeadingSenary>
      );
    default:
      throw new Error("Heading type not supported");
  }
};

export default Heading;
