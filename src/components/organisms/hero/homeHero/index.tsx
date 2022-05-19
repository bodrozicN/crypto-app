import React from "react";
import { IStats } from "../../../../interfaces";
import { HeroHeading, ThemeButton } from "../../../moleculs";
import { Stats } from "../../../organisms";
import { StyledHomeHero } from "./style";

type Props = {
  stats: IStats;
  changeTheme: () => void;
};

const HomeHero = ({ stats, changeTheme }: Props) => {
  return (
    <StyledHomeHero role="homeHero">
      <div>
        <HeroHeading value1="Crypto" value2="App" />
        <Stats {...stats} />
        <ThemeButton onClick={changeTheme} />
      </div>
    </StyledHomeHero>
  );
};

export default HomeHero;
