import React from "react";
import { IStats } from "../../../../interfaces";
import { HeroHeading, ThemeButton } from "../../../moleculs";
import { Stats } from "../../../organisms";
import { StyledHomeHero } from "./style";

const HomeHero = (props: IStats) => {
  return (
    <StyledHomeHero role="homeHero">
      <div>
        <HeroHeading value1="Crypto" value2="App" />
        <Stats {...props} />
        <ThemeButton
          onClick={() => {
            console.log("ide gas");
          }}
        />
      </div>
    </StyledHomeHero>
  );
};

export default HomeHero;
