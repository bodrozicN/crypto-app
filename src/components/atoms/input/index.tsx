import React from "react";
import { FormProps } from "../../../types";
import { StyledInput } from "./style";

type Props = Pick<FormProps, "value" | "onChange"> & {
  placeholder: string;
  className?: string;
};

const Input = (props: Props) => {
  return <StyledInput {...props} />;
};

export default Input;
