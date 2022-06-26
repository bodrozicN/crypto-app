import React from "react";
import { CoinHeroProps } from "../../../../types";
import { Wrapper } from "./style";
import { CoinCredentials } from "../../../moleculs";
import { CoinStats, CoinPriceSection } from "../../../organisms";

const CoinHero = (props: CoinHeroProps) => {
  const { coinCredentials, coinHeroStats, currency, handleSelect, ohlc } =
    props;

  return (
    <Wrapper>
      <div>
        <CoinCredentials {...coinCredentials} />
        <CoinStats {...{ coinHeroStats, currency, handleSelect }} />
        <CoinPriceSection {...{ ohlc, currency }} />
      </div>
    </Wrapper>
  );
};

export default CoinHero;
