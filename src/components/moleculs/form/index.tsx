import React, { ReactNode } from "react";
import { Wrapper } from "./style";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children?: ReactNode;
  className?: string;
};

const Form = ({ onSubmit, children, className }: Props) => {
  return (
    <Wrapper onSubmit={onSubmit} className={className}>
      {children}
    </Wrapper>
  );
};
export default Form;
