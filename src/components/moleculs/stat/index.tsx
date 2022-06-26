import React from "react";
import { Span, OSpan } from "../../atoms";
import { Wrapper } from "./style";

type Props = {
  title: string;
  value: unknown;
  $switchColor?: boolean;
};

const Stat = ({ title, value, $switchColor }: Props) => {
  return (
    <Wrapper>
      <>
        <Span
          type={OSpan.heroPrimary}
          content={title}
          $switchColor={$switchColor}
        />
        {value && (
          <Span
            type={OSpan.heroSecondary}
            content={value}
            $switchColor={$switchColor}
          />
        )}
      </>
    </Wrapper>
  );
};

export default Stat;
