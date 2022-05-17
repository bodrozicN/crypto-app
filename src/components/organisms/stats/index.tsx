import React from "react";
import { StyledStats } from "./style";
import { Stat, Filter } from "../../moleculs";
import { IStats } from "../../../interfaces";
import { numberFormatter } from "../../../helpers";
import { OCurrency } from "../../../types";

const Stats = (props: IStats) => {
  //prettier-ignore
  const {
    total24hVolume, totalCoins, totalExchanges,
    totalMarketCap, totalMarkets,
  } = props;

  const [char, volume] = numberFormatter(total24hVolume, OCurrency.usd);
  const [_, marketCap] = numberFormatter(totalMarketCap, OCurrency.usd);

  return (
    <StyledStats role="stats">
      <Stat title="Coins" value={totalCoins} />
      <Stat title="Excanges" value={totalExchanges} />
      <Stat title="Markets" value={totalMarkets} />
      <Stat title="24h Volume" value={volume} char={char} />
      <Stat title="Total Market Cap" value={marketCap} char={char} />
      <Filter type="heroFilter" />
    </StyledStats>
  );
};

export default Stats;
