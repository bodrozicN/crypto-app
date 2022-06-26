import React from "react";
import { Wrapper } from "./style";

type Props = {
  $type: "chartButton" | "paginationButton" | "arrowButton" | "loginButton";
  content?: unknown;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = (props: Props) => {
  return (
    <Wrapper {...props}>
      {props.children ? props.children : (props.content as string)}
    </Wrapper>
  );
};

export default Button;
