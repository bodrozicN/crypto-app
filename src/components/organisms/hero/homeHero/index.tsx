import React from "react";
import { IStats } from "../../../../interfaces";
import { HeroHeading, ThemeButton } from "../../../moleculs";
import { Stats } from "../../../organisms";
import { StyledHomeHero, Wrapper } from "./style";
import { Svg } from "../../../atoms";
import { TCurrency } from "../../../../types";

type Props = {
  stats: IStats;
  changeTheme: () => void;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  currency: TCurrency;
};

const HomeHero = ({ stats, changeTheme, handleSelect, currency }: Props) => {
  return (
    <Wrapper role="homeHero">
      <Svg type="heroSvg" />
      <StyledHomeHero>
        <div>
          <HeroHeading value1="Crypto" value2="App" />
          <Stats
            stats={stats}
            handleSelect={handleSelect}
            currency={currency}
          />
          <ThemeButton onClick={changeTheme} />
        </div>
      </StyledHomeHero>
    </Wrapper>
  );
};

export default HomeHero;
