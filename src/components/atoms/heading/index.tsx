import React from "react";
import { HeadingPrimary } from "./style";

type HeadingPrimaryProps = {
  title: unknown;
  type: "h1";
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
    default:
      throw new Error("Heading type not supported");
  }
};

export default Heading;
