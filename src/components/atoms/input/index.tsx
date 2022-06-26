import { forwardRef } from "react";
import { InputProps } from "../../../types";
import { Wrapper } from "./style";

const Input = forwardRef(
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return <Wrapper {...props} ref={ref} />;
  }
);
export default Input;
