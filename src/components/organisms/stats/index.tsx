import React from "react";
import { StyledStats } from "./style";
import { Stat, Filter } from "../../moleculs";
import { IStats } from "../../../interfaces";
import { numberFormatter } from "../../../helpers";
import { OCurrency, OFIlter } from "../../../types";

const Stats = (props: IStats) => {
  //prettier-ignore
  const {
    total24hVolume, totalCoins, totalExchanges,
    totalMarketCap, totalMarkets,
  } = props;

  // destructuring rerurned string array from numberFormatter function
  const [char, volume] = numberFormatter(total24hVolume, OCurrency.usd);
  const [, marketCap] = numberFormatter(totalMarketCap, OCurrency.usd);

  return (
    <StyledStats role="stats">
      <Stat title="Coins" value={totalCoins} />
      <Stat title="Excanges" value={totalExchanges} />
      <Stat title="Markets" value={totalMarkets} />
      <Stat title="24h Volume" value={volume} char={char} />
      <Stat title="Total Market Cap" value={marketCap} char={char} />
      <Filter onChange={(e) => {}} type={OFIlter.currency} />
    </StyledStats>
  );
};

export default Stats;
