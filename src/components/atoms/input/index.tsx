import React from "react";
import { StyledInput } from "./style";

type Props = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input = ({ placeholder, onChange, value, className }: Props) => {
  return (
    <StyledInput
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
