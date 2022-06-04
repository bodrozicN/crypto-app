import React from "react";
import { StyledButton } from "./style";

type Props = {
  type: "chartButton";
  content: unknown;
  className?: string;
  onClick: () => void;
};

const Button = ({ content, className, type, onClick }: Props) => {
  return (
    <StyledButton onClick={onClick} className={className} $type={type}>
      {content as string}
    </StyledButton>
  );
};

export default Button;
