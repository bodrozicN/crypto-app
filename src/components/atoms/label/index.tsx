import React from "react";

type Props = {
  content: unknown;
};

const Label = ({ content }: Props) => {
  return <label>{content as string}</label>;
};

export default Label;
