import React from "react";
import { StyledButton } from "./style";

type Props = {
  $type: "chartButton" | "paginationButton" | "arrowButton" | "loginButton";
  content?: unknown;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Button = (props: Props) => {
  return (
    <StyledButton {...props}>
      {props.children ? props.children : (props.content as string)}
    </StyledButton>
  );
};

export default Button;
