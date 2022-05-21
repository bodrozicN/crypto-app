import React from "react";
import { IStats } from "../../../../interfaces";
import { HeroHeading, ThemeButton } from "../../../moleculs";
import { Stats } from "../../../organisms";
import { StyledHomeHero, Wrapper } from "./style";
import { Svg } from "../../../atoms";

type Props = {
  stats: IStats;
  changeTheme: () => void;
};

const HomeHero = ({ stats, changeTheme }: Props) => {
  return (
    <Wrapper role="homeHero">
      <Svg type="heroSvg" />
      <StyledHomeHero>
        <div>
          <HeroHeading value1="Crypto" value2="App" />
          <Stats {...stats} />
          <ThemeButton onClick={changeTheme} />
        </div>
      </StyledHomeHero>
    </Wrapper>
  );
};

export default HomeHero;
