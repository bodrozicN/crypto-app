import React from "react";
import { Span, OSpan } from "../../atoms";
import { StyledStat } from "./style";

type Props = {
  title: string;
  value: unknown;
  char?: string;
};

const Stat = ({ title, value, char }: Props) => {
  return (
    <StyledStat>
      <Span type={OSpan.heroPrimary} content={title} />
      <span>
        {/* if we have a char prop it wil render currency char */}
        {char && <Span type={OSpan.heroTertiary} content={char} />}
        <Span type={OSpan.heroSecondary} content={value} />
      </span>
    </StyledStat>
  );
};

export default Stat;
