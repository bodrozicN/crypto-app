import React from "react";
import { StyledInput } from "./style";

type Props = {
  placeholder: string;
};

const Input = ({ placeholder }: Props) => {
  return <StyledInput placeholder={placeholder} />;
};

export default Input;
