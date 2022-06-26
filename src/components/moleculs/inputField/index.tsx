import React, { forwardRef } from "react";
import { IconType } from "react-icons";
import { InputProps } from "../../../types";
import { Label, Input } from "../../atoms";
import { Wrapper } from "./style";

type Props = {
  input: InputProps;
  label?: string;
  Icon?: IconType;
};

const InputField = forwardRef(
  (
    { input, label, Icon }: Props,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Wrapper>
        {Icon && <Icon className="icon" />}
        {label && <Label content={label} />}
        <Input {...input} ref={ref} />
      </Wrapper>
    );
  }
);

export default InputField;
