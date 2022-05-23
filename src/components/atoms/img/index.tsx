import React from "react";
import { StyledImg } from "./style";

export type ImgType = "tableImg" | "detailsImg";

type Props = {
  src: unknown;
  alt: unknown;
  type: ImgType;
};

const Image = ({ alt, src, type }: Props) => {
  const imgProps = {
    src: src as string,
    alt: alt as string,
    $type: type,
  };

  return <StyledImg {...imgProps} />;
};

export default Image;
