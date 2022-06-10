import React from "react";
import { Span, OSpan } from "../../atoms";
import { StyledStat } from "./style";

type Props = {
  title: string;
  value: unknown;
  char?: string;
  $switchColor?: boolean;
};

const Stat = ({ title, value, char, $switchColor }: Props) => {
  return (
    <StyledStat>
      <Span
        type={OSpan.heroPrimary}
        content={title}
        $switchColor={$switchColor}
      />
      <span>
        {/* if we have a char prop it wil render currency char */}
        {char && (
          <Span
            type={OSpan.heroTertiary}
            content={char}
            $switchColor={$switchColor}
          />
        )}
        <Span
          type={OSpan.heroSecondary}
          content={value}
          $switchColor={$switchColor}
        />
      </span>
    </StyledStat>
  );
};

export default Stat;
