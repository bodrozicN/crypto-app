import React from "react";
import { Span } from "../../atoms";
import { StyledStat } from "./style";

type Props = {
  title: string;
  value: string | number;
  char?: string;
};

const Stat = ({ title, value, char }: Props) => {
  return (
    <StyledStat role="stat">
      <Span type="heroLabel" title={title} />
      <span>
        {char && <Span type="heroChar" title={char} />}
        <Span type="heroValue" title={value} />
      </span>
    </StyledStat>
  );
};

export default Stat;
