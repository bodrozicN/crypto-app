import React from "react";
import { HeadingPrimary, HeadingSenary, HeadingQuaternary } from "./style";

type HeadingPrimaryProps = {
  title: unknown;
  type: "h1" | "h4" | "h6";
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

    case "h4":
      return (
        <HeadingQuaternary $isBold={props.$isBold}>
          {props.title as string}
        </HeadingQuaternary>
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
