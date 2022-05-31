import React from "react";
import { IStats } from "../../../../interfaces";
import { HeroHeading } from "../../../moleculs";
import { Stats } from "../../../organisms";
import { StyledHomeHero, Wrapper } from "./style";
import { Svg } from "../../../atoms";
import { TCurrency } from "../../../../types";

type Props = {
  heroProps: {
    stats: IStats | undefined;
    handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    currency: TCurrency;
  };
};

const HomeHero = ({ heroProps }: Props) => {
  return (
    <Wrapper role="homeHero">
      <Svg type="heroSvg" />
      <StyledHomeHero>
        <div>
          <HeroHeading value1="Crypto" value2="App" />
          <Stats
            stats={heroProps.stats}
            handleSelect={heroProps.handleSelect}
            currency={heroProps.currency}
          />
        </div>
      </StyledHomeHero>
    </Wrapper>
  );
};

export default React.memo(HomeHero);
