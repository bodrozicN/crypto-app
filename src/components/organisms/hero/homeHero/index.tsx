import React from "react";
import { HeroHeading } from "../../../moleculs";
import { HomeStats } from "../../../organisms";
import { Wrapper } from "./style";
import { HomeHeroProps } from "../../../../types";

const HomeHero = (props: HomeHeroProps) => {
  return (
    <Wrapper>
      <div>
        <HeroHeading value1="Crypto" value2="App" />
        <HomeStats {...props} />
      </div>
    </Wrapper>
  );
};

export default React.memo(HomeHero);
