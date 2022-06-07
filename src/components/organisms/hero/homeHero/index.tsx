import React from "react";
import { HeroHeading } from "../../../moleculs";
import { HomeStats } from "../../../organisms";
import { StyledHomeHero } from "./style";
import { HomeHeroProps } from "../../../../types";

const HomeHero = (props: HomeHeroProps) => {
  return (
    <StyledHomeHero>
      <div>
        <HeroHeading value1="Crypto" value2="App" />
        <HomeStats {...props} />
      </div>
    </StyledHomeHero>
  );
};

export default React.memo(HomeHero);
